localDate(date:any) {
		let localDate = date;
		let localTimeZone = moment().format().substr(19);
		
		if(localTimeZone.charAt(0) === '+') {
			return moment(localDate).add(moment.duration(localTimeZone.substr(1))).format('YYYY-MM-DDThh:mm:ss');
		}

		if(localTimeZone.charAt(0) === '-') {
			return moment(localDate).subtract(moment.duration(localTimeZone.substr(1))).format('YYYY-MM-DDTHH:mm:ss');
		}
        return moment(date).format('YYYY-MM-DDThh:mm:ss');
	}
