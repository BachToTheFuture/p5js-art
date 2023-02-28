
class Ball {
    constructor(x, y, img, orig) {
        this.pos = createVector(x, y);
		this.vel = createVector(Math.random()*30, Math.random()*30);
		this.img = img;
		this.orig = orig;
		this.counter = 30;
		this.resets = 0;
    }

    render() {
		if (this.vel.x != 0 && this.vel.y != 0) {
			let old_pos = this.pos;
			let new_pos = p5.Vector.add(this.pos, this.vel);
			stroke(orig.get(this.pos.x, this.pos.y));
			strokeWeight(1);
			line(old_pos.x, old_pos.y, new_pos.x, new_pos.y);
			this.pos.set(new_pos);
			if (img.get(this.pos.x, this.pos.y)[0] < 10) {
				if (this.counter <= 10) this.vel.rotate(HALF_PI*random(0.5,1.5));
				this.counter++;
				//if (this.counter > 10) this.vel.mult(0,0);
			}
			else {
				this.counter = 0;
				this.resets++;
				if (this.resets > 800) this.vel.mult(0,0);
			}
		}
    }
}