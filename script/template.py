# class for rendering templates
import re

def print_all(seq,type):
	fn = lambda(x,y): x
	if type=="js": fn = script_tag
	
	def formatted_concat(x,y): return x+fn(y,"root")
	return reduce(formatted_concat,seq,"")
	
def script_tag(url, base):
	tag_template = "<script src=\"{__src__}\" type=\"text/javascript\"></script>\n"
	if base == "root":
		root = "/"
	else:
		root = ""
	return tag_template.replace("{__src__}",root + url)

class Template:
	# eval_pattern = r"(<%\s+(.*?)\s+%>)" -- feature creep
	eval_print_pattern = r"(<%=\s+(.*?)\s+%>)"
	
	def render(self,input_args,template,output):
		# read template
		template_string = open("templates/" + template).read()
		commands = re.findall(self.eval_print_pattern,template_string,re.S)
		
		def run_template(inputs,commands,template_string):
			globals().update(inputs)
			for cmd in commands:
				template_string = template_string.replace(cmd[0],eval(cmd[1]))
			return template_string
		
		template_string = run_template(input_args,commands,template_string)
		
		# write output
		output_file = open(output,"w")
		output_file.write(template_string)
		output_file.close()