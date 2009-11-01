import jsmin, template
from helpers import *

# options: minify, name, output goes to bin
# TODO - requirements flag

class JSBuilder:
	def build_javascript(self,src_dir,class_name,name="commonplace",expanded=False,output_name=""):
		print output_name
		if not output_name: output_name = "bin/" + class_name + "-min.js" # fix this
		source_file = src_dir + "/" + class_name + ".js"
		
		all_files = get_requirements(source_file)
		all_files.append(source_file)
		all_files = uniquify(all_files)
		
		contents = ""
		for file in all_files:
			file_txt = open(file).read()
			if not expanded: file_txt = jsmin.jsmin(file_txt)
			contents += file_txt
		
		# template_step
		template_inputs = dict(name=name,contents=contents)
		template_writer = template.FileTemplate()
		template_writer.render(template_inputs,"named.js",output_name)