var objSigns = [
	{
		Sign: "aquarius",
		img:"img/aquarius.png",
		description: "Aquarius-born are shy and quiet , but on the other hand they can be eccentric and energetic. However, in both cases, they are deep thinkers and highly intellectual people who love helping others. They are able to see without prejudice, on both sides, which makes them people who can easily solve problems."
	},
	{
		Sign: "pisces",
		img:"img/pisces.png",
		description: "Pisces are very friendly, so they often find themselves in a company of very different people. Pisces are selfless, they are always willing to help others, without hoping to get anything back. Pisces is a Water sign and as such this zodiac sign is characterized by empathy and expressed emotional capacity."
	},
	{
		Sign: "aries",
		img:"img/aries.png",
		description: "As the first sign in the zodiac, the presence of Aries almost always marks the beginning of something energetic and turbulent.They are continuously looking for dynamic, speed and competition. They are always first in everything - from work to social gatherings."
	},
	{
		Sign: "taurus",
		img:"img/taurus.png",
		description: "Powerful and reliable, Taurus is the first when it comes to harvesting the fruits of his labor. They love everything that is good and beautiful, and they are often surrounded by material pleasures. People born under the Taurus sign are very sensual and tactile. Touch is extremely important for them, both in business and in romance. Stable and conservative,"
	},
	{
		Sign: "gemini",
		img:"img/gemini.jpg",
		description: "Expressive and quick-witted, Gemini represents two different sides of personality and you will never be sure with whom you will face. Gemini can be sociable,communicative and ready for fun, while on the other hand it can be very serious, thoughtful, restless and even indecisive."
	},
	{
		Sign: "cancer",
		img:"img/cancer.png",
		description: "Deeply intuitive and sentimental, Cancer can be one of the most challenging Zodiac signs to get to know. Cancer is very emotional and sensitive, and they care about family and home. Cancer is sympathetic and is very attached to the people who surround him."
	},
	{
		Sign: "leo",
		img:"img/leo.png",
		description: "People born under the sign of Leo are natural born leaders. They are dramatic, creative self-confident, dominant and extremely difficult to resist. They can achieve anything they want, whether it's about work or time spent will family and friends."
	},
	{
		Sign: "virgo",
		img:"img/virgo.png",
		description: "Virgos are always paying attention to smallest details and their deep sense of humanity makes them one of the most careful signs of the zodiac. Their methodical approach to life ensures that nothing is left to chance. Virgos are often tender but also very careful."
	},
	{
		Sign: "libra",
		img:"img/libra.png",
		description: "People born under the sign of Libra are peaceful and fair, and they hate being alone. Partnership is very important for Libra -born, and with their victorious mentality and cooperation, they cannot stand to be alone."
	},
	{
		Sign: "scorpio",
		img:"img/scorpio.png",
		description: "Scorpio-born are passionate and assertive people. They are determined and decisive, and will research until they find out the truth. Scorpio is a great leader, always aware of the situation and also features prominently in resourcefulness."
	},
	{
		Sign: "saggitarius",
		img:"img/saggitarius.jpg",
		description: "Curious and energetic, Sagittarius is one of the biggest travelers among all zodiac signs. Their open mind and philosophical view motivates them to wander around the world in search of the meaning of life. Sagittarius is extrovert, optimistic and enthusiastic, and likes changes."
	},
	{
		Sign: "capricorn",
		img:"img/capricorn.png",
		description: "When it comes to professionalism and traditional values, Capricorn is the first. Capricorn is practical and is considered to be the most serious sign of the zodiac, who possess an independence that enables significant progress both on the personal level and in business."
	}
	]

function getInfo() {
	var userInput = document.getElementById("zodiac").value.toLowerCase()

	for(i=0; i < objSigns.length; i++) {

		if(userInput === objSigns[i].Sign){
			document.getElementById("Sign").innerHTML = objSigns[i].Sign
			document.getElementById("img").src = objSigns[i].img
			document.getElementById("description").innerHTML = objSigns[i].description
			return
		}
	}
}
