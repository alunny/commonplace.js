# build recursively, with requirements
#		python script/build.py scrap Ninja --name=commonplace --output_name=tmp/Ninja-full.js --expanded

import sys
from JSBuilder import *
from CommandUtil import *

jsb = JSBuilder()
flags = ["(--expanded)","(--name=(\w+))","(--output_name=([\w/]+\.js))"]

def call_build():
	if len(sys.argv) < 3:
		raise IOError("too few arguments -- must have at least 2")
		
	js_build = CommandUtil(sys.argv,flags,action="build")
	jsb.build_javascript(*js_build.pos_inputs(2), **js_build.keyword_inputs(2))

if __name__ == "__main__":
	call_build()