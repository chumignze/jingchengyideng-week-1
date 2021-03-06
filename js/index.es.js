class PraiseButton {
	constructor(_num, _element) {
		this.num = _num;
		this.element = _element;
	}
	thumbClickAction() {
		this.element.click(() => { 
			if (this.num < 10) {
				this.element.css('-webkit-filter', 'grayscale(0)'); 
				$('#animation').addClass('num'); 
				this.num = addThumb(this.num); 
				setTimeout(function() {
					$('#animation').removeClass('num');
				}, 1000);
				console.log("第 " + this.num + " 个赞！");
			} else {
				this.element.css('-webkit-filter', 'grayscale(1)'); 
				this.num = 0;
				console.log("赞数清零。");
			}
		});
	}
}
class Thumb extends PraiseButton {
	constructor(_num, _element) {
		super(_num, _element); 
	}
}
export default {Thumb}