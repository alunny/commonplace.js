import sys, re, os, template
from helpers import *

# generate:
#		scrap
#		helper
#		test
#		testcase

class CommonplaceGenerator:
	cp_root = "" # TODO: calculate based on where script is run
	template_writer = template.FileTemplate()
	
	def scrap(self, class_name, template_name="new_scrap_class.js", test_template_name="new_test.js", no_test=False):
		inputs = dict(scrap_name=class_name)
		scrap_dest = "scraps/" + class_name + ".js"
				
		# write scrap
		print "--- writing scrap to " + scrap_dest + " using template " + template_name
		self.template_writer.render(inputs,template_name,scrap_dest)
		
		if not no_test:
			test_dest = "test/" + class_name + ".js"
			print "--- writing test to " + test_dest
			self.template_writer.render(inputs,test_template_name,test_dest)
			
	def test(self, class_name, template_name="new_test.js"):
		inputs = dict(scrap_name=class_name)
		test_dest = "test/" + class_name + ".js"
		
		print "--- writing test to " + test_dest + " using template " + template_name
		self.template_writer.render(inputs,template_name,test_dest)
		
	def testcase(self, class_name, template_name="default.html", output_name=None):
		test_name = "test/" + class_name + ".js"
		if not output_name:
			output_name = class_name + ".html"
		
		required = get_requirements(test_name) # refactor
		required.append(test_name)
		required = uniquify(required)
		
		inputs = dict(class_name=class_name,scripts=required)
		source = template_name
		destination = "testcases/" + output_name
		
		self.template_writer.render(inputs,source,destination)