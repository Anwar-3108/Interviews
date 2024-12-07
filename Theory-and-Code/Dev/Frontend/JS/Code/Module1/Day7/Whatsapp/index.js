async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`
SHREK

Written by

William Steig & Ted Elliott




SHREK
Once upon a time there was a lovely 
princess. But she had an enchantment 
upon her of a fearful sort which could 
only be broken by love's first kiss. 
She was locked away in a castle guarded 
by a terrible fire-breathing dragon. 
Many brave knights had attempted to 
free her from this dreadful prison, 
but non prevailed. She waited in the 
dragon's keep in the highest room of 
the tallest tower for her true love 
and true love's first kiss. (laughs) 
Like that's ever gonna happen. What 
a load of - (toilet flush)

Allstar - by Smashmouth begins to play. Shrek goes about his 
day. While in a nearby town, the villagers get together to go 
after the ogre.

NIGHT - NEAR SHREK'S HOME

MAN1
Think it's in there?

MAN2
All right. Let's get it!

MAN1
Whoa. Hold on. Do you know what that 
thing can do to you?

MAN3
Yeah, it'll grind your bones for it's 
bread.

Shrek sneaks up behind them and laughs.

SHREK
Yes, well, actually, that would be a 
giant. Now, ogres, oh they're much worse. 
They'll make a suit from your freshly 
peeled skin.

MEN
No!

SHREK
They'll shave your liver. Squeeze the 
jelly from your eyes! Actually, it's 
quite good on toast.

MAN1
Back! Back, beast! Back! I warn ya! 
(waves the torch at Shrek.)

Shrek calmly licks his fingers and extinguishes the torch. The 
men shrink back away from him. Shrek roars very loudly and long 
and his breath extinguishes all the remaining torches until the 
men are in the dark.

SHREK
This is the part where you run away. 
(The men scramble to get away. He laughs.) 
And stay out! (looks down and picks 
up a piece of paper. Reads.) "Wanted. 
Fairy tale creatures."(He sighs and 
throws the paper over his shoulder.)


THE NEXT DAY

// add more lines as per your need
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)



// this is to send buld msg to someone on whatsapp ,

// open whatsapp web > go to target chat > inspect the chat > open console > hit this script 