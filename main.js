javascript:(function(){var delimiterOption=prompt("Enter 1 to separate keywords by new line, or 2 to separate by '/'");if(delimiterOption!=='1'&&delimiterOption!=='2'){alert("Invalid option selected.");return;}var input=prompt("Please enter keywords separated as per your chosen option:");var keywords;if(delimiterOption==='1'){keywords=input.split('\n').map(function(keyword){return keyword.trim();});}else if(delimiterOption==='2'){keywords=input.split('/').map(function(keyword){return keyword.trim();});}if(keywords.length===0)return;var counts={};keywords.forEach(function(keyword){var regex=new RegExp(keyword,"gi");var matches=document.body.innerText.match(regex);counts[keyword]=matches?matches.length:0;});var result=%27%27;for(var keyword in counts){result+=keyword+%27: %27+counts[keyword]+%27\n%27;}alert(result);})();