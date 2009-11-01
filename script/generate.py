# generate scrap:
#		python script/generate.py scrap MyScrap --no_test --template_name=some_template.js --test_template_name=some_test_template.js

# generate testcase
#		python script/generate.py testcase MyScrap --template_name=default.html --output_name=MyScrap.html

# generate test
#		python script/generate.py test scraps/MyScrap --test_name=MyScrap.js --template_name=some_test.js

import sys, re
from CommonplaceGenerator import *
from CommandUtil import *

cpg = CommonplaceGenerator()
cpg_dispatch = {
	'scrap':cpg.scrap,
	'test':cpg.test,
	'testcase':cpg.testcase
}
flags = {"scrap":["(--no_test)","(--template_name=(\w+\.js))","(--test_template_name=(\w+\.js))"],
					"test":["(--template_name=(\w+\.js))","(--test_name=(\w+\.js))"],
					"testcase":["(--template_name=(\w+\.html))","(--output_name=(\w+\.html))"]}

def call_generator():
	if len(sys.argv) < 3:
		raise IOError("too few arguments -- must have at least 2")

	js_gen = CommandUtil(sys.argv)
	js_gen.add_options(flags.get(js_gen.action,{}))
	
	cpg_dispatch.get(js_gen.action)(*js_gen.pos_inputs(1), **js_gen.keyword_inputs(1))	


if __name__ == "__main__":
	call_generator()