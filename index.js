(async () => {  
  // Get the IP from a DNS lookup
  let response = await fetch('https://dns.google/resolve?name=lkserver.ddnss.eu');
  let json = await response.json();
  if ("Answer" in json && json["Answer"][0]) {
    let elem = document.querySelector("#ip-showcase");
    elem.innerHTML = json["Answer"][0]["data"] ?? "Unknown";
  }
})();
