const isUrlExternal = (url) => {
	const domainRegex = /https?:\/\/((?:[\w\d]+\.)+[\w\d]{2,})/i
                                      
	const getDomainOrNull = (url) => {
		const regExec = domainRegex.exec(url)
		return regExec.length > 1 ? regExec[1] : null
 	}

 	return getDomainOrNull(location.href) !== getDomainOrNull(url)
}

module.exports = isUrlExternal
