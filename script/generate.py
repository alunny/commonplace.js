# generate:
#		scrap
#		helper
#		test
#		testcase
import sys, re, os

def uniquify(seq, idfun=None): 
   # order preserving
   if idfun is None:
       def idfun(x): return x
   seen = {}
   result = []
   for item in seq:
       marker = idfun(item)
       if marker in seen: continue
       seen[marker] = 1
       result.append(item)
   return result

class CommonplaceGenerator:
	require_pattern = "\/\/ require\: ((.+\/)+.+\.js)\\n"
	cp_root = "" # TODO: calculate based on where script is run
	
	# testcase
	# ~$ python script/generate.py testcase Cycler default
	# 	produces /testcases/Cycler.html
	# 	based on default template
	def testcase(self):
		scrap_name = test_name = sys.argv[2]
		scrap_name = "scraps/" + sys.argv[2] + ".js"
		test_name = "test/" + sys.argv[2] + ".js"
		template_name = sys.argv[3] or "default"
		
		required = self.get_requirements(test_name)
		required.append(test_name)
		required = uniquify(required)
		print required
	
	def get_requirements(self, scrap):
		f_lines = open(scrap).readlines()
		required = []
		for line in f_lines:
			match = re.match(self.require_pattern,line)
			if match:
				path = match.groups()[0]
				required.extend(self.get_requirements(path))
				required.append(path)
		return required

l = CommonplaceGenerator()
l.testcase()