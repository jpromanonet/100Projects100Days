$("#new-todo").keypress(function (event) {
	var keycode = event.keyCode ? event.keyCode : event.which;
	if (keycode == "13") {
		console.log("pressed");

		if ($(this).val().length !== 0) {
			var toDoCount = $("span.box").length + 1;

			$("#todos").prepend(
				'<li><input id="checkbox-' +
					toDoCount +
					'" type="checkbox"><label for="checkbox-' +
					toDoCount +
					'">' +
					$(this).val() +
					'<span class="box"></span></label></li>'
			);
			$(this).val("");
		}
	}
});

function growPlant() {
	var stage = $("svg").data("stage");
	if (stage < 11) {
		playTimeline(stage);
		$("aside p").text(changeMotivation(stage));
		$("svg").data("stage", stage + 1);
	}
}

function changeMotivation(number) {
	switch (number) {
		case 1:
			return "Just. Do. It.";
			break;
		case 2:
			return "Keep moving. Keep hustling.";
			break;
		case 3:
			return "So productive, I can't even.";
			break;
		case 4:
			return "Yeah, you go, Glen Coco.";
			break;
		case 5:
			return "You got this!";
			break;
		case 6:
			return "Productivity is your middle name.";
			break;
		case 7:
			return "DJ Khaled: Another one!";
			break;
		case 8:
			return "You're almost there...";
			break;
		case 9:
			return "One more for good measure.";
			break;
		case 10:
			return "Ta-da!";
			break;
	}
}

$("#todos").on("click", "label", function () {
	$(this).closest("li").toggleClass("done");
	if ($(this).closest("li").hasClass("done")) {
		growPlant();
	}
});

gsap.registerPlugin(EasePack);

const tl = gsap.timeline();
var master = new TimelineMax();

$(function () {
	tl.fromTo(".soil", { scale: 0 }, { duration: 0.4, scale: 1 });
	growPlant();
});

function playTimeline(item) {
	tl.to("svg", { duration: 0.3, opacity: 1, ease: Quad.easeInOut }, "grow-1");

	tl.fromTo(
		".grow-1 > g",
		{ scale: 0, opacity: 0, transformOrigin: "bottom center" },
		{ duration: 0.35, scale: 1, opacity: 1, stagger: 0.04, ease: Quad.easeInOut },
		"grow-2"
	);
	tl.fromTo(
		"#cactus-bulb-1",
		{ scale: 0, opacity: 0, transformOrigin: "bottom center" },
		{ duration: 0.55, scale: 0.3, opacity: 1, ease: Quad.easeInOut },
		"grow-2"
	);

	tl.fromTo(
		".grow-2 > g",
		{ scale: 0, opacity: 0, transformOrigin: "top center" },
		{ duration: 0.44, scale: 1, opacity: 1, stagger: 0.04, ease: Quad.easeInOut },
		"grow-3"
	);
	tl.to(
		"#cactus-bulb-1",
		{ duration: 0.4, scale: 0.6, opacity: 1, ease: Quad.easeInOut },
		"grow-3"
	);

	tl.fromTo(
		".grow-3 > g",
		{ scale: 0, opacity: 0, transformOrigin: "bottom center" },
		{ duration: 0.3, scale: 1, opacity: 1, stagger: 0.04, ease: Quad.easeInOut },
		"grow-4"
	);
	tl.to(
		"#cactus-bulb-1",
		{ duration: 0.3, scale: 1, opacity: 1, ease: Quad.easeInOut },
		"grow-4"
	);

	tl.fromTo(
		".grow-4 > g",
		{ scale: 0, opacity: 0, transformOrigin: "bottom center" },
		{ duration: 0.4, scale: 1, opacity: 1, stagger: 0.04, ease: Quad.easeInOut },
		"grow-5"
	);
	tl.fromTo(
		"#long-cactus-1",
		{ scale: 0, opacity: 0, transformOrigin: "bottom center" },
		{ duration: 0.4, scale: 0.3, opacity: 1, ease: Quad.easeInOut },
		"grow-5"
	);

	tl.to(
		"#long-cactus-1",
		{ duration: 0.5, scale: 0.6, opacity: 1, ease: Quad.easeInOut },
		"grow-6"
	);
	tl.fromTo(
		".grow-5 > g",
		{ scale: 0, opacity: 0, transformOrigin: "bottom center" },
		{ duration: 0.5, scale: 1, opacity: 1, stagger: 0.04, ease: Quad.easeInOut },
		"grow-6"
	);

	tl.to(
		"#long-cactus-1",
		{ duration: 0.45, scale: 1, opacity: 1, ease: Quad.easeInOut },
		"grow-7"
	);
	tl.fromTo(
		".grow-6 > g",
		{ scale: 0, opacity: 0, transformOrigin: "bottom center" },
		{ duration: 0.4, scale: 1, opacity: 1, stagger: 0.04, ease: Quad.easeInOut },
		"grow-7"
	);
	tl.fromTo(
		"#cactus-bulb-2",
		{ scale: 0, opacity: 0, transformOrigin: "bottom center" },
		{ duration: 0.4, scale: 1, opacity: 1, stagger: 0.04, ease: Quad.easeInOut },
		"grow-7"
	);

	tl.fromTo(
		".grow-7 > g",
		{ scale: 0, opacity: 0, transformOrigin: "bottom center" },
		{ duration: 0.3, scale: 1, opacity: 1, stagger: 0.04, ease: Quad.easeInOut },
		"grow-8"
	);
	tl.fromTo(
		"#long-cactus-2",
		{ scale: 0, opacity: 0, transformOrigin: "bottom center" },
		{ duration: 0.4, scale: 1, opacity: 1, stagger: 0.04, ease: Quad.easeInOut },
		"grow-8"
	);

	tl.fromTo(
		"#long-cactus-3",
		{ scale: 0, opacity: 0, transformOrigin: "bottom center" },
		{ duration: 0.3, scale: 1, opacity: 1, stagger: 0.04, ease: Quad.easeInOut },
		"grow-9"
	);
	tl.fromTo(
		"#cactus-bulb-3",
		{ scale: 0, opacity: 0, transformOrigin: "bottom center" },
		{ duration: 0.4, scale: 1, opacity: 1, stagger: 0.04, ease: Quad.easeInOut },
		"grow-9"
	);

	tl.fromTo(
		".grow-8 > g",
		{ scale: 0, opacity: 0, transformOrigin: "bottom center" },
		{ duration: 0.5, scale: 1, opacity: 1, stagger: 0.04, ease: Quad.easeInOut },
		"grow-10"
	);
	tl.fromTo(
		"#long-cactus-4",
		{ scale: 0, opacity: 0, transformOrigin: "bottom center" },
		{ duration: 0.5, scale: 1, opacity: 1, stagger: 0.04, ease: Quad.easeInOut },
		"grow-10"
	);

	tl.tweenFromTo("grow-" + item, "grow-" + (item + 1));
}