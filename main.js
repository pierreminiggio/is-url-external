const isUrlExternal = (url) => {
  var domainRegex = /https?:\/\/((?:[\w\d]+\.)+[\w\d]{2,})/i
                                      
  const getDomain = (url) => {
   	return domainRegex.exec(url)[1]  
  }

  return getDomain(location.href) !== getDomain(url)
}

module.exports = isUrlExternal
