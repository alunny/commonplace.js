import re

class CommandUtil:
	"""
	len(sys_args) >= 3
	self.options = list of regexes to match against self.params
	"""
	def __init__(self, sys_args, options=[],action = None):
		self.filename = sys_args.pop(0)
		self.action = action.lower() if action else sys_args.pop(0).lower()
		self.params = sys_args
		self.options = options
		
	def add_options(self, new_options):
		self.options.extend(new_options)
		
	def pos_inputs(self,end):
		"""
			returns list
		"""
		return self.params[:end]
		
	def keyword_inputs(self,start):
		"""
			returns dict
		"""
		flags = [arg for arg in self.params[start:] if [flag for flag in self.options if re.match(flag,arg)]]
		split_flags = [flag.split("=") for flag in flags]
		inputs = dict([(split[0][2:], split[1] if split[1:] else True) for split in split_flags])
		return inputs
		
	