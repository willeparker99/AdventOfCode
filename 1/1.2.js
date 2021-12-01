let li = document.querySelector("pre").textContent.split(/\r?\n/);
let num = 0;
let prev = undefined;
li.forEach((e, i) => {
	if (i < li.length) {
		let newone =
			parseInt(li[i]) + parseInt(li[i + 1]) + parseInt(li[i + 2]);
		if (prev && newone > prev) num++;
		prev = newone;
	}
});
console.log(num);
