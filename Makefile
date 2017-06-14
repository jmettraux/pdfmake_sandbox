
serve:
	ruby -run -ehttpd public/ -p7001
s: serve

#mini:
#	java -jar tools/closure-compiler.jar --js --language_in=ECMASCRIPT6 public/scripts/pdfkit.js >> public/scripts/pdfkit.mini.js

.PHONY: serve mini

