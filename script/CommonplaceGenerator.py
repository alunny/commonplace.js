import sys, re, os, template
from helpers import *

# generate:
#		scrap
#		helper
#		test
#		testcase

class CommonplaceGenerator:
	cp_root = "" # TODO: calculate based on where script is run
		
	# testcase
	# ~$ python script/generate.py testcase Cycler default
	# 	produces /testcases/Cycler.html
	# 	based on default template
	def testcase(self):
		class_name = sys.argv[2]
		test_name = "test/" + class_name + ".js"
		template_name = sys.argv[3] or "default"
		
		required = get_requirements(test_name) # refactor
		required.append(test_name)
		required = uniquify(required)
		
		inputs = dict(class_name=class_name,scripts=required,body_text="nom nom nom")
		source = template_name + ".html"
		destination = "testcases/" + class_name + ".html"
		
		template_writer = template.Template()
		template_writer.render(inputs,source,destination)