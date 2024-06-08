Proyecto.pdf: message.md meta.yaml bibliography.bib
	pandoc -t pdf $< -o $@ --bibliography=./bibliography.bib --metadata-file=meta.yaml --citeproc

show: Proyecto.pdf
	zathura $<
