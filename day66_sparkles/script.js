let particles = [];
const PARTICLES_COUNT = 5;

function setup() {
	createCanvas(innerWidth, innerHeight);
	
	// create particles
	for(let i=0; i<PARTICLES_COUNT; i++) {
		const particle = new Particle();
		particles.push(particle);
	}
}

function draw() {
	background(51);
	
	particles.forEach(particle => {
		particle.update();
		particle.draw();
	});
}

function mousePressed() {
	const pos = createVector(mouseX, mouseY);
	const particle = new Particle(pos);
	particles.push(particle)
}

class Particle {
	constructor(pos, vel, size, col) {
		this.pos = pos ? createVector(pos.x, pos.y) : createVector(random(width), random(height));
		this.vel = vel ? createVector(vel.x, vel.y) : createVector(random(-1, 1), random(-1, 1));
		this.acc = createVector(0, 0)
		this.size = size || 15;
		this.col = col || color(random(255), random(255), random(255));
	}
	
	update() {
		// apply gravity
		const gravity = createVector(0, 0.8 * this.size);
		this.applyForce(gravity);
		
		// update pos, vel, acc
		this.vel.add(this.acc)
		this.pos.add(this.vel);
		this.acc.mult(0);
		this.edges();
	}
	
	applyForce(force) {
		const f = p5.Vector.div(force, this.size);
		this.acc.add(f);
	}
	
	draw() {
		noStroke();
		fill(this.col);
		circle(this.pos.x, this.pos.y, this.size * 2);
	}
	
	edges() {
		// left
		if(this.pos.x - this.size < 0) { 
			this.vel.x *= -0.9
			this.pos.x = this.size;
			
		}
		
		// right
		if (this.pos.x + this.size > width) {
			this.vel.x *= -0.9
			this.pos.x = width - this.size;
		}
		
		// top
		if(this.pos.y - this.size < 0) {
			this.vel.y *= -0.9
			this.pos.y = this.size;
		}
		
		// bottom
		if(this.pos.y + this.size > height) {
			this.vel.y *= -0.9
			this.pos.y = height - this.size;
			
			// split and half
			this.splitParticle();
		}
	}
	
	splitParticle() {
		// remove if it is too small
		if(this.size < 4) {
			particles = particles.filter(p => p !== this);
		} else {
			this.size /= 1.2;
			this.applyForce(createVector(random(-50, 50), random(-50, 50)))
			
			for(let i=0; i<1; i++) {
				const particle = new Particle(this.pos, this.vel, this.size, this.col);
				particle.applyForce(createVector(random(-50, 50), random(-50, 50)))
				particles.push(particle);
			}
			
		}
	}
}






// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});