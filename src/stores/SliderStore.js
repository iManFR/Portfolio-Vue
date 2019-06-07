class SliderStore {

	constructor() {
		this.state = {
			currentSlideId: 0
		}
	}

	prev(){
		this.state.currentSlideId --
	}

	next(){
		this.state.currentSlideId ++
	}

	setSlideId(slideIdToSet){
		this.state.currentSlideId = slideIdToSet
	}

	reset(){
		this.state.currentSlideId = 0
	}

}

export default new SliderStore()
