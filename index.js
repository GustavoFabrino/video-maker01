
const readline = require("readline-sync")
function start() {
 const content = {}

 content.searchTerm = askAndReturnSearchTerm()
 content.prefix = askAndReturnPrefix()

	function askAndReturnSearchTerm(){
	 return readline.question("Type a Wikipedia search term: ")
	}
	
	function askAndReturnPrefix(){
	const prefixes = ["Who is", "What is", "The history ok"]
	const SelectedPrefixIndex = readline.keyInSelect(prefixes,"Chose on option:")
	const SelectedPrefixText = prefixes[SelectedPrefixIndex]
	return SelectedPrefixText
	}
	console.log(content)
 
}

start()



