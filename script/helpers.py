import re

require_pattern = "^\/\/ require\: ((.+\/)+.+\.js)\\n"

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

def get_requirements(scrap):
	required = []	
	f_lines = open(scrap).readlines()
	required = []
	for line in f_lines:
		match = re.match(require_pattern,line)
		if match:
			path = match.groups()[0]
			required.extend(get_requirements(path))
			required.append(path)
	return required