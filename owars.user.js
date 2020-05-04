// ==UserScript==
// @name Owars
// @description Херабора
// @author nazarpunk
// @license MIT
// @version 0.02
// @include /^https?:\/\/.+\.owars\.ru.*$/
// @grant GM_xmlhttpRequest
// @grant unsafeWindow
// @connect gorsaldo.xyz
// @noframes
// @run-at document-start
// @updateURL https://github.com/nazarpunk/owars/raw/master/owars.user.js
// @source https://vk.com/nazarpunk
// ==/UserScript==

var show_errors              = false;
var show_derevo              = false;
String.prototype.contains    = function (it) {
	return this.indexOf(it) != -1
};
String.prototype.rep         = function (searc, replac) {
	return this.split(searc).join(replac)
};
String.prototype.reverse     = function () {
	splitext  = this.split("");
	revertext = splitext.reverse();
	reversed  = revertext.join("");
	return reversed
};
String.prototype.startsWith  = function (str) {
	return (this.match("^" + str) == str)
};
String.prototype.endsWith    = function (str) {
	return (this.match(str + "$") == str)
};
String.prototype.removeFirst = function () {
	return (this.substring(1, this.length))
};
String.prototype.removeLast  = function () {
	return (this.substring(0, this.length - 1))
};
String.prototype.getLast     = function () {
	return (this.substring(this.length - 1, this.length))
};
make_temp_iframe             = function (url_parameters) {
	try {
		var tif = top.Mainframe.document.createElement('iframe');
		tif.setAttribute("id", "temp_iframe");
		tif.setAttribute("src", "http://www.esterx.com/owars/index.php?" + url_parameters);
		tif.setAttribute("style", "width:1px; height:1px;");
		tif.setAttribute("onload", "getRights()");
		top.Mainframe.document.getElementsByTagName("body")[0].appendChild(tif)
	} catch (e) {
		alert("make_temp_iframe error: " + e.message)
	}
	return false
};

function getDateNow() {
	var d   = new Date();
	var h   = d.getHours().toString().length < 2 ? "0" + d.getHours() : d.getHours();
	var m   = d.getMinutes().toString().length < 2 ? "0" + d.getMinutes() : d.getMinutes();
	var s   = d.getSeconds().toString().length < 2 ? "0" + d.getSeconds() : d.getSeconds();
	var y   = d.getFullYear().toString();
	var i_i = parseInt(d.getMonth()) + 1;
	var ii  = i_i.toString().length < 2 ? "0" + i_i.toString() : i_i.toString();
	var a   = d.getDate().toString().length < 2 ? "0" + d.getDate() : d.getDate();
	var dxx = a + "." + ii + "." + y;
	var txx = h + ":" + m + ":" + s;
	return dxx
}

function getTimeNow() {
	var d   = new Date();
	var h   = d.getHours().toString().length < 2 ? "0" + d.getHours() : d.getHours();
	var m   = d.getMinutes().toString().length < 2 ? "0" + d.getMinutes() : d.getMinutes();
	var s   = d.getSeconds().toString().length < 2 ? "0" + d.getSeconds() : d.getSeconds();
	var y   = d.getFullYear().toString();
	var i_i = parseInt(d.getMonth()) + 1;
	var ii  = i_i.toString().length < 2 ? "0" + i_i.toString() : i_i.toString();
	var a   = d.getDate().toString().length < 2 ? "0" + d.getDate() : d.getDate();
	var dxx = a + "." + ii + "." + y;
	var txx = h + ":" + m + ":" + s;
	return txx
}

function getTimeDateFormat(date, isTimeFirst) {
	var d   = date;
	var h   = d.getHours().toString().length < 2 ? "0" + d.getHours() : d.getHours();
	var m   = d.getMinutes().toString().length < 2 ? "0" + d.getMinutes() : d.getMinutes();
	var s   = d.getSeconds().toString().length < 2 ? "0" + d.getSeconds() : d.getSeconds();
	var y   = d.getFullYear().toString();
	var i_i = parseInt(d.getMonth()) + 1;
	var ii  = i_i.toString().length < 2 ? "0" + i_i.toString() : i_i.toString();
	var a   = d.getDate().toString().length < 2 ? "0" + d.getDate() : d.getDate();
	var dxx = a + "-" + ii + "-" + y;
	var txx = h + ":" + m + ":" + s;
	var res = "";
	if (isTimeFirst) {
		res = txx + " " + dxx
	} else {
		res = dxx + " " + txx
	}
	return res
}

function getTimeNowInSeconds() {
	var d    = new Date();
	var h    = parseInt(d.getHours(), 10);
	var m    = parseInt(d.getMinutes(), 10);
	var s    = parseInt(d.getSeconds(), 10);
	var tnis = s + (m * 60) + (h * 60 * 60);
	return tnis
}

function getTimesFormat(time_in_sec) {
	try {
		var d = new Date("January 1, 2000 00:00:00");
		d.setSeconds(time_in_sec, 0);
		var t = "";
		t += time_in_sec > 86400 ? "" + parseInt(time_in_sec / 86400) + "~" : "";
		t += d.getHours().toString().length < 2 ? "" + d.getHours() : d.getHours();
		t += ":";
		t += d.getMinutes().toString().length < 2 ? "0" + d.getMinutes() : d.getMinutes();
		t += ":";
		t += d.getSeconds().toString().length < 2 ? "0" + d.getSeconds() : d.getSeconds();
		return t
	} catch (e) {
		if (show_errors) alert(e.message)
	}
}

function addSecondsToDate(date, seconds) {
	return new Date(date.valueOf() + seconds * 1000)
}

function $$(id) {
	try {
		return document.getElementById(id)
	} catch (e) {}
}

function $id$(id) {
	try {
		return document.getElementById(id)
	} catch (e) {}
}

function $names$(id) {
	try {
		return document.getElementsByName(id)
	} catch (e) {}
}

function $name$(id) {
	try {
		return document.getElementsByName(id)[0]
	} catch (e) {}
}

function $tags$(id) {
	try {
		return document.getElementsByTagName(id)
	} catch (e) {}
}

function $tag$(id) {
	try {
		return document.getElementsByTagName(id)[0]
	} catch (e) {}
}

function $innerText$(obj) {
	try {
		if (typeof (obj.innerText) != 'undefined') {
			return obj.innerText
		} else {
			return obj.textContent
		}
	} catch (e) {}
}

function $$$(frameid, tag) {
	try {
		return document.getElementById(frameid).contentWindow.document.getElementsByTagName(tag)[0]
	} catch (e) {
		if (show_errors) alert("in frame error: " + e.message)
	}
}

function live(tagname, id, display) {
	try {
		var d = document.createElement(tagname);
		d.setAttribute("id", id);
		d.setAttribute("style", "display:" + (display ? "block;" : "none;"));
		document.getElementsByTagName("body")[0].appendChild(d);
		return document.getElementById(id)
	} catch (e) {
		if (show_errors) alert("live error: " + e.message)
	}
}

function kill(id) {
	try {
		document.body.removeChild(document.getElementById(id))
	} catch (e) {}
}

function toContent(id, ht) {
	try {
		document.getElementById(id).innerHTML = ht
	} catch (e) {}
}

function addContent(id, ht) {
	try {
		document.getElementById(id).innerHTML += ht
	} catch (e) {}
}

function getContent(id) {
	try {
		return document.getElementById(id).innerHTML
	} catch (e) {}
}

function getText(id) {
	try {
		return document.getElementById(id).innerText
	} catch (e) {}
}

function scrollUp(id) {
	try {
		document.getElementById(id).scrollTop = 0
	} catch (e) {}
}

function scrollDown(id) {
	try {
		document.getElementById(id).scrollTop = document.getElementById(id).scrollHeight + 20
	} catch (e) {}
}

function show(id) {
	try {
		document.getElementById(id).style.display = "block"
	} catch (e) {}
}

function hide(id) {
	try {
		document.getElementById(id).style.display = "none"
	} catch (e) {}
}

function zero(id) {
	try {
		document.getElementById(id).innerHTML = "0"
	} catch (e) {}
}

function plusOne(id) {
	try {
		document.getElementById(id).innerHTML = parseInt(document.getElementById(id).innerHTML) + 1
	} catch (e) {}
}

function rnd(m, n) {
	m = parseInt(m);
	n = parseInt(n);
	return Math.floor(Math.random() * (n - m + 1)) + m
}

function addEVENT(object, event, handler) {
	if (typeof object.addEventListener != 'undefined') object.addEventListener(event, handler, false);
	else if (typeof object.attachEvent != 'undefined') object.attachEvent('on' + event, handler);
	else throw "Incompatible browser"
}

function removeEVENT(object, event, handler) {
	if (typeof object.removeEventListener != 'undefined') object.removeEventListener(event, handler, false);
	else if (typeof object.detachEvent != 'undefined') object.detachEvent('on' + event, handler);
	else throw "Incompatible browser"
}

function script_menu() {
	try {
		if (top.LeftMenu.document.getElementById("leftScriptMenu").innerText == "Скрипт:OFF") {
			top.LeftMenu.document.getElementById("leftScriptMenu").innerHTML = "Скрипт:ON";
			window.localStorage.setItem("is_vova_userscript_on", "true")
		} else {
			top.LeftMenu.document.getElementById("leftScriptMenu").innerHTML = "Скрипт:OFF";
			window.localStorage.setItem("is_vova_userscript_on", "false")
		}
	} catch (t) {
		if (show_errors) alert("scanner_menu error: " + t.message)
	}
}

function menu_mouse_over(t) {
	t.style.color = 'orange'
}

function menu_mouse_out(t) {
	t.style.color = 'dodgerblue'
}

function setShip(ship, count) {
	try {
		if (ship == 1) {
			var inputs = top.Mainframe.document.getElementsByTagName("input");
			for (var i = 0; i < inputs.length; i++) {
				try {
					var input = inputs[i];
					if (input.getAttribute("title") == "Шпионский зонд") {
						var value_old = parseInt(input.value, 10);
						var value_new = value_old - parseInt(count, 10);
						input.value   = value_new;
						break
					}
				} catch (t) {
					if (show_errors) alert("input.title error: " + t.message)
				}
			}
		}
	} catch (e) {
		if (show_errors) alert("selectMission error: " + e.message)
	}
}

function selectMission(m) {
	try {
		var selects = top.Mainframe.document.getElementsByTagName("select");
		for (var i = 0; i < selects.length; i++) {
			try {
				var select = selects[i];
				if (select.name == "mission") {
					if (m == 4) {
						select.value = "4"
					} else if (m == 1) {
						select.value = "1"
					} else if (m == 3) {
						select.value = "3"
					} else if (m == 2) {
						select.value = "2"
					} else if (m == 6) {
						select.value = "6"
					} else if (m == 8) {
						select.value = "8"
					} else if (m == 9) {
						select.value = "9"
					} else if (m == 14) {
						select.value = "14"
					}
					shortInfo();
					destinyFix();
					break
				}
			} catch (s) {
				if (show_errors) alert("select.name error: " + s.message)
			}
		}
	} catch (e) {
		if (show_errors) alert("selectMission error: " + e.message)
	}
}

function openWindow(name) {
	try {
		if (name == "Планетарий") {
			if (!top.Mainframe.location.toString().contains("overview")) top.Mainframe.location = "?option=overview"
		} else if (name == "Империя") {
			if (!top.Mainframe.contentWindow.location.href.toString().contains("virtual")) top.Mainframe.contentWindow.location.href = "?option=virtual"
		} else if (name == "Постройки") {
			if (!top.Mainframe.location.toString().contains("buildings")) top.Mainframe.location = "?option=buildings"
		} else if (name == "Ресурсы") {
			if (!top.Mainframe.location.toString().contains("resources")) top.Mainframe.location = "?option=resources"
		} else if (name == "Исследования") {
			if (!top.Mainframe.location.toString().contains("research")) top.Mainframe.location = "?option=research"
		} else if (name == "Верфь") {
			if (!top.Mainframe.location.toString().contains("hangar")) top.Mainframe.location = "?option=hangar"
		} else if (name == "Флот") {} else if (name == "Технологии") {
			if (!top.Mainframe.location.toString().contains("techtree")) top.Mainframe.location = "?option=techtree"
		} else if (name == "Галактика") {
			if (!top.Mainframe.location.toString().contains("galaxy")) top.Mainframe.location = "?option=galaxy"
		} else if (name == "Оборона") {
			if (!top.Mainframe.location.toString().contains("defense")) top.Mainframe.location = "?option=gefense"
		} else if (name == "Сообщения") {
			if (!top.Mainframe.location.toString().contains("messages")) top.Mainframe.location = "?option=messages"
		} else {
			if (!top.Mainframe.location.toString().contains("overview")) top.Mainframe.location = "?option=overview"
		}
	} catch (e) {
		if (show_errors) alert("openWindow error: " + e.message)
	}
}

function goShip() {
	try {
		var inputs = top.Mainframe.document.getElementsByTagName("input");
		for (var i = 0; i < inputs.length; i++) {
			try {
				var input = inputs[i];
				if (input.name == "submit") {
					input.outerHTML = "<input name='newsubmit' type='submit' value='Отправить Флот'>";
					setTimeout(function () {
						try {
							top.Mainframe.document.forms[0].newsubmit.click()
						} catch (s) {
							if (show_errors) alert("submit error: " + s.message)
						}
					}, 599);
					break
				}
			} catch (t) {
				if (show_errors) alert("input.title error: " + t.message)
			}
		}
		return
	} catch (e) {
		if (show_errors) alert("goShip error: " + e.message)
	}
}

function wakeUpShips() {
	top.Mainframe.maxShips();
	top.Mainframe.shortInfo();
	selectMission(4);
	top.Mainframe.maxResources();
	goShip()
}

function openPlaneta(coords) {
	try {
		var main_select = document.getElementById("pselector");
		if (main_select.options[main_select.selectedIndex].innerText.contains(coords)) {
			return
		}
		var options = main_select.options;
		for (var i = 0; i < options.length; i++) {
			try {
				var option = options[i];
				if (option.innerText.contains(coords)) {
					main_select.selectedIndex = i;
					main_select.onchange();
					break
				}
			} catch (t) {
				if (show_errors) alert("input.title error: " + t.message)
			}
		}
	} catch (e) {
		if (show_errors) alert("openPlaneta error: " + e.message)
	}
}

function isTagInnerText(tagName, textContains) {
	var res = false;
	try {
		var tags = document.getElementsByTagName(tagName);
		for (var i = 0; i < tags.length; i++) {
			try {
				var tag = tags[i];
				if (tag.innerText.contains(textContains)) {
					res = true;
					break
				}
			} catch (t) {
				if (show_errors) alert("isTagInnerText_in error: " + t.message)
			}
		}
	} catch (e) {
		if (show_errors) alert("isTagInnerText_out error: " + e.message)
	}
	return res
}

function getUni() {
	var a   = document.getElementsByTagName("a")[0].baseURI;
	var n   = a.split(".")[0];
	var uni = n.split("//")[1];
	return uni
}

init_script = function () {
	if (window.name == "Mainframe") {
		if (getUserData("is_vova_userscript_on") != "true") return;
		var trs = document.getElementsByTagName("tr");
		for (var i = 0; i < trs.length; i++) {
			try {
				var tr = trs[i];
				if (tr.innerText.contains("Флот был послан")) {
					if (show_derevo) alert('Флот был послан');
					break
				} else if (tr.innerText.contains("Исследование") && !tr.innerText.contains("Возвращение флота")) {
					if (show_derevo) alert('Исследование');
					var arr = tr.parentNode.children;
					for (var s = 1; s < arr.length; s++) {
						try {
							var one          = arr[s].firstElementChild.nextElementSibling;
							var one_raw_text = one.innerText;
							var one_time     = one_raw_text.split("Время постройки: ")[1].split("Останется: ")[0];
							var where        = one.lastElementChild.previousElementSibling;
							var end_time     = getTimeDateFormat(addSecondsToDate(new Date(), getSecondsFromRaw(one_time)), false);
							where.outerHTML  = "<br/>Завершится: " + end_time + "<br/>"
						} catch (iss_for) {
							if (show_errors) alert("iss_for error: " + iss_for.message)
						}
					}
					tr.parentNode.innerHTML = tr.parentNode.innerHTML.rep('Титан:', 'Титан</font>:').rep('Кремний:', 'Кремний</font>:').rep('Топливо:', 'Топливо</font>:');
					for (var x = 1; x < arr.length; x++) {
						try {
							var titan = 0;
							var krem  = 0;
							var topl  = 0;
							var res   = '<span style="color:dodgerblue;font-weight:normal;">';
							var one   = arr[x].lastElementChild.previousElementSibling.lastElementChild;
							if (one.children.length == 2) {
								if (one.firstElementChild.innerText == 'Титан') {
									titan = parseInt(one.firstElementChild.nextElementSibling.innerText.rep('.', ''), 10);
									if (titan < 0) res += "<br/>Титан накопится: " + getTimeDateFormat(addSecondsToDate(new Date(), ((titan * (-1) * 24 * 60 * 60) / parseInt(loadDayCapacity('titan'), 10)).toFixed()), false)
								}
							} else if (one.children.length == 4) {
								if (one.firstElementChild.innerText == 'Титан') {
									titan = parseInt(one.firstElementChild.nextElementSibling.innerText.rep('.', ''), 10);
									if (titan < 0) res += "<br/>Титан накопится: " + getTimeDateFormat(addSecondsToDate(new Date(), ((titan * (-1) * 24 * 60 * 60) / parseInt(loadDayCapacity('titan'), 10)).toFixed()), false);
									if (one.firstElementChild.nextElementSibling.nextElementSibling.innerText == 'Кремний') {
										krem = parseInt(one.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerText.rep('.', ''), 10);
										if (krem < 0) res += "<br/>Крем. накопится: " + getTimeDateFormat(addSecondsToDate(new Date(), ((krem * (-1) * 24 * 60 * 60) / parseInt(loadDayCapacity('krem'), 10)).toFixed()), false)
									} else if (one.firstElementChild.nextElementSibling.nextElementSibling.innerText == 'Топливо') {
										topl = parseInt(one.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerText.rep('.', ''), 10);
										if (topl < 0) res += "<br/>Топл. накопится: " + getTimeDateFormat(addSecondsToDate(new Date(), ((topl * (-1) * 24 * 60 * 60) / parseInt(loadDayCapacity('topl'), 10)).toFixed()), false)
									}
								} else if (one.firstElementChild.innerText == 'Кремний') {
									krem = parseInt(one.firstElementChild.nextElementSibling.innerText.rep('.', ''), 10);
									if (krem < 0) res += "<br/>Крем. накопится: " + getTimeDateFormat(addSecondsToDate(new Date(), ((krem * (-1) * 24 * 60 * 60) / parseInt(loadDayCapacity('krem'), 10)).toFixed()), false);
									if (one.firstElementChild.nextElementSibling.nextElementSibling.innerText == 'Топливо') {
										topl = parseInt(one.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerText.rep('.', ''), 10);
										if (topl < 0) res += "<br/>Топл. накопится: " + getTimeDateFormat(addSecondsToDate(new Date(), ((topl * (-1) * 24 * 60 * 60) / parseInt(loadDayCapacity('topl'), 10)).toFixed()), false)
									}
								}
							} else if (one.children.length == 6) {
								if (one.firstElementChild.innerText == 'Титан') {
									titan = parseInt(one.firstElementChild.nextElementSibling.innerText.rep('.', ''), 10);
									if (titan < 0) res += "<br/>Титан накопится: " + getTimeDateFormat(addSecondsToDate(new Date(), ((titan * (-1) * 24 * 60 * 60) / parseInt(loadDayCapacity('titan'), 10)).toFixed()), false);
									krem = parseInt(one.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerText.rep('.', ''), 10);
									if (krem < 0) res += "<br/>Крем. накопится: " + getTimeDateFormat(addSecondsToDate(new Date(), ((krem * (-1) * 24 * 60 * 60) / parseInt(loadDayCapacity('krem'), 10)).toFixed()), false);
									topl = parseInt(one.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerText.rep('.', ''), 10);
									if (topl < 0) res += "<br/>Топл. накопится: " + getTimeDateFormat(addSecondsToDate(new Date(), ((topl * (-1) * 24 * 60 * 60) / parseInt(loadDayCapacity('topl'), 10)).toFixed()), false)
								}
							}
							res += '</span>';
							var where = one.lastElementChild;
							where.innerHTML += res
						} catch (issx_for) {
							if (show_errors) alert("issx_for error: " + issx_for.message)
						}
					}
					break
				} else if (tr.innerText.contains("Действующие постройки (Всего потребуется времени")) {
					if (show_derevo) alert('Действующие постройки (Всего потребуется времени');
					var arr        = tr.parentNode.children;
					var time_total = 0;
					for (var s = 1; s < arr.length; s++) {
						try {
							var one      = arr[s].firstElementChild.nextElementSibling;
							var one_time = getSecondsFromRaw(one.innerText);
							time_total += one_time;
							var where    = one.nextElementSibling;
							var end_time = getTimeDateFormat(addSecondsToDate(new Date(), time_total), false);
							where.innerHTML += "<br/>" + end_time
						} catch (dej_for) {}
					}
				} else if (tr.innerText.contains("Остановить производство")) {
					if (show_derevo) alert('Остановить производство');
					try {
						var galochka = document.getElementsByName('pause')[0];
						galochka.click()
					} catch (gg) {}
					var inputs = $tags$('input');
					for (var inp = 1; inp < inputs.length; inp++) {
						try {
							var one      = inputs[inp];
							var one_type = one.getAttribute('type');
							var one_name = one.getAttribute('name');
							if ((one_type == 'text') && (one_name.contains('buy['))) {
								var index = one_name.split('buy[')[1].split(']')[0];
								one.setAttribute('onchange', 'javascript:toTotalCountTime(' + index + ');');
								var hidden_element = document.createElement('div');
								hidden_element.setAttribute('id', 'hidden_' + index);
								hidden_element.setAttribute('style', 'opacity:0; display:inline-block;');
								hidden_element.innerHTML = one.parentElement.previousElementSibling.innerText.split('Время постройки:')[1];
								var br_element           = document.createElement('br');
								var lot_element          = document.createElement('div');
								lot_element.setAttribute('id', 'lot_' + index);
								lot_element.setAttribute('style', 'color:dodgerblue;');
								var total_element = document.createElement('div');
								total_element.setAttribute('id', 'total_' + index);
								total_element.setAttribute('style', 'color:dodgerblue;');
								one.parentElement.previousElementSibling.appendChild(hidden_element);
								one.parentElement.previousElementSibling.appendChild(lot_element);
								one.parentElement.previousElementSibling.appendChild(total_element)
							} else if (one_type == 'button') {
								var one_onclick = one.getAttribute('onclick');
								var index       = one_onclick.split('scpm(')[1].split(',')[0];
								one.setAttribute('onclick', one_onclick + ';toTotalCountTime(' + index + ');')
							}
						} catch (verf_for) {
							if (show_errors) alert("verf_for error: " + verf_for.message)
						}
					}
					break;
					break
				} else if (tr.innerText.contains("Постройки (")) {
					if (show_derevo) alert('Постройки (');
					var arr = tr.parentNode.children;
					for (var s = 1; s < arr.length; s++) {
						try {
							var one          = arr[s].firstElementChild.nextElementSibling;
							var one_raw_text = one.innerText;
							var one_time     = one_raw_text.split("Время постройки: ")[1].split("Останется: ")[0];
							var total_time   = '';
							try {
								total_time = getText('time_total')
							} catch (tte) {
								total_time = '0m 0s'
							}
							if (typeof (total_time) == 'undefined') total_time = '0m 0s';
							var where       = one.lastElementChild.previousElementSibling;
							var all_time    = parseInt(getSecondsFromRaw(one_time), 10) + parseInt(getSecondsFromRaw(total_time), 10);
							var end_time    = getTimeDateFormat(addSecondsToDate(new Date(), all_time), false);
							where.outerHTML = "<br/>Завершится: " + end_time + "<br/>"
						} catch (bui_for) {
							if (show_errors) alert("bui_for error: " + bui_for.message)
						}
					}
					var bs = $tags$('b');
					for (var bsi = 0; bsi < bs.length; bsi++) {
						try {
							var one = bs[bsi];
							if (one.getAttribute('class') == 'o_red') {
								var value = one.innerText;
								if (!value.startsWith('-')) {
									one.innerHTML = '-' + value
								}
							}
						} catch (bs_for) {
							if (show_errors) alert("bs_for error: " + bs_for.message)
						}
					}
					for (var x = 1; x < arr.length; x++) {
						try {
							var titan = 0;
							var krem  = 0;
							var topl  = 0;
							var res   = '<span style="color:dodgerblue;font-weight:normal;">';
							var one   = arr[x].lastElementChild.previousElementSibling.lastElementChild;
							if (one.children.length == 2) {
								if (one.firstElementChild.innerText == 'Титан') {
									titan = parseInt(one.firstElementChild.nextElementSibling.innerText.rep('.', ''), 10);
									if (titan < 0) res += "<br/>Титан накопится: " + getTimeDateFormat(addSecondsToDate(new Date(), ((titan * (-1) * 24 * 60 * 60) / parseInt(loadDayCapacity('titan'), 10)).toFixed()), false)
								}
							} else if (one.children.length == 4) {
								if (one.firstElementChild.innerText == 'Титан') {
									titan = parseInt(one.firstElementChild.nextElementSibling.innerText.rep('.', ''), 10);
									if (titan < 0) res += "<br/>Титан накопится: " + getTimeDateFormat(addSecondsToDate(new Date(), ((titan * (-1) * 24 * 60 * 60) / parseInt(loadDayCapacity('titan'), 10)).toFixed()), false);
									if (one.firstElementChild.nextElementSibling.nextElementSibling.innerText == 'Кремний') {
										krem = parseInt(one.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerText.rep('.', ''), 10);
										if (krem < 0) res += "<br/>Крем. накопится: " + getTimeDateFormat(addSecondsToDate(new Date(), ((krem * (-1) * 24 * 60 * 60) / parseInt(loadDayCapacity('krem'), 10)).toFixed()), false)
									} else if (one.firstElementChild.nextElementSibling.nextElementSibling.innerText == 'Топливо') {
										topl = parseInt(one.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerText.rep('.', ''), 10);
										if (topl < 0) res += "<br/>Топл. накопится: " + getTimeDateFormat(addSecondsToDate(new Date(), ((topl * (-1) * 24 * 60 * 60) / parseInt(loadDayCapacity('topl'), 10)).toFixed()), false)
									}
								} else if (one.firstElementChild.innerText == 'Кремний') {
									krem = parseInt(one.firstElementChild.nextElementSibling.innerText.rep('.', ''), 10);
									if (krem < 0) res += "<br/>Крем. накопится: " + getTimeDateFormat(addSecondsToDate(new Date(), ((krem * (-1) * 24 * 60 * 60) / parseInt(loadDayCapacity('krem'), 10)).toFixed()), false);
									if (one.firstElementChild.nextElementSibling.nextElementSibling.innerText == 'Топливо') {
										topl = parseInt(one.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerText.rep('.', ''), 10);
										if (topl < 0) res += "<br/>Топл. накопится: " + getTimeDateFormat(addSecondsToDate(new Date(), ((topl * (-1) * 24 * 60 * 60) / parseInt(loadDayCapacity('topl'), 10)).toFixed()), false)
									}
								}
							} else if (one.children.length == 6) {
								if (one.firstElementChild.innerText == 'Титан') {
									titan = parseInt(one.firstElementChild.nextElementSibling.innerText.rep('.', ''), 10);
									if (titan < 0) res += "<br/>Титан накопится: " + getTimeDateFormat(addSecondsToDate(new Date(), ((titan * (-1) * 24 * 60 * 60) / parseInt(loadDayCapacity('titan'), 10)).toFixed()), false);
									krem = parseInt(one.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerText.rep('.', ''), 10);
									if (krem < 0) res += "<br/>Крем. накопится: " + getTimeDateFormat(addSecondsToDate(new Date(), ((krem * (-1) * 24 * 60 * 60) / parseInt(loadDayCapacity('krem'), 10)).toFixed()), false);
									topl = parseInt(one.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerText.rep('.', ''), 10);
									if (topl < 0) res += "<br/>Топл. накопится: " + getTimeDateFormat(addSecondsToDate(new Date(), ((topl * (-1) * 24 * 60 * 60) / parseInt(loadDayCapacity('topl'), 10)).toFixed()), false)
								}
							}
							res += '</span>';
							var where = one.lastElementChild;
							where.innerHTML += res
						} catch (buix_for) {
							if (show_errors) alert("buix_for error: " + buix_for.message)
						}
					}
					break
				} else if (tr.innerText.contains("Посланный флот возвращается")) {
					if (show_derevo) alert('Посланный флот возвращается');
					setTimeout(function () {
						openWindow("Планетарий")
					}, 490 + rnd(9, 99));
					break
				} else if (tr.innerText.contains("Нет ниодного коробля")) {
					if (show_derevo) alert('Нет ниодного коробля');
					setTimeout(function () {
						openWindow("Планетарий")
					}, 490 + rnd(9, 99));
					break
				} else if (tr.outerHTML.contains("Вернуть флот")) {
					if (show_derevo) alert('Вернуть флот');
					try {
						var arr      = tr.parentNode.children;
						var ret      = tr.firstChild.nextElementSibling;
						var ret_data = ret.nextElementSibling;
						var flot     = ret_data.firstElementChild.outerHTML;
						var from     = ret_data.firstElementChild.nextElementSibling.innerHTML;
						var dest     = (ret_data.firstElementChild.nextElementSibling.nextElementSibling.nodeName == 'IMG') ? ret_data.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML : ret_data.firstElementChild.nextElementSibling.nextElementSibling.innerHTML;
						var miss     = (ret_data.lastChild.nodeValue != null) ? ret_data.lastChild.nodeValue.split(":")[1] : ret_data.lastChild.outerHTML;
						var idx      = parseInt(tr.firstChild.firstChild.attributes[0].nodeValue.split("_time")[1], 10);
						var time     = getSecondsFromRaw(getContent("counter_time" + idx));
						var one_time = 0;
						for (var r = (idx + 1); r < arr.length; r++) {
							try {
								var one      = arr[r].firstChild.nextElementSibling.nextElementSibling;
								var one_flot = one.firstElementChild.outerHTML;
								var one_from = one.firstElementChild.nextElementSibling.innerHTML;
								var one_dest = (one.firstElementChild.nextElementSibling.nextElementSibling.nodeName == 'IMG') ? one.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML : one.firstElementChild.nextElementSibling.nextElementSibling.innerHTML;
								var one_miss = (one.lastChild.nodeValue != null) ? one.lastChild.nodeValue.split(":")[1] : one.lastChild.outerHTML;
								if ((one_flot == flot) && (one_miss == miss) && (one_from == dest) && (one_dest == from)) {
									one_time = getSecondsFromRaw(getContent("counter_time" + r));
									break
								}
							} catch (ret_for) {
								if (show_errors) alert("ret_for error: " + ret_for.message)
							}
						}
						var ret_time = (one_time - time - time);
						ret.innerHTML += getTimeDateFormat(addSecondsToDate(new Date(), ret_time), false)
					} catch (ret) {
						if (show_errors) alert("ret error: " + ret.message)
					}
				} else if (tr.innerText.contains("Солнечная система ")) {
					if (show_derevo) alert('Солнечная система');
					var arr = tr.parentNode.children;
					for (var ss = 2; ss < arr.length - 2; ss++) {
						try {
							var nick_cell = arr[ss].cells[3];
							var nick      = '';
							try {
								nick = nick_cell.innerText
							} catch (n) {}
							if (nick != '') {
								try {
									var nick_attr = nick_cell.firstElementChild.attributes[1].nodeValue;
									var nick_name = nick.rep(' (v)', '').rep(' (i)', '').rep(' (I)', '');
									nick_cell.setAttribute('onclick', 'showInfo("' + nick_name + '")')
								} catch (n) {}
							}
							if ((arr[ss].cells[2].innerHTML.contains("Поле обломков")) && (arr[ss].cells[2].innerHTML.contains("Ресурсы"))) {
								var t_1       = arr[ss].cells[2].innerHTML.split("Титан:");
								var t_2       = t_1[1].split("Кремний:");
								var titan_raw = t_2[0];
								var titan     = titan_raw.split("</th></tr><tr>")[0].split("</th><th>")[1].rep('.', '');
								var t_3       = arr[ss].cells[2].innerHTML.split("Кремний:");
								var t_4       = t_3[1].split("Действия:");
								var krem_raw  = t_4[0];
								var krem      = krem_raw.split("</th></tr><tr>")[0].split("</th><th>")[1].rep('.', '');
								var summ_res  = ((parseInt(titan, 10) + parseInt(krem, 10)) / 20000).toFixed();
								if ((((parseInt(titan, 10) + parseInt(krem, 10)) / 20000) - summ_res) > 0) summ_res++;
								if (summ_res == 0) summ_res = 1;
								arr[ss].cells[2].firstElementChild.innerHTML += summ_res
							}
						} catch (ss_for) {
							if (show_errors) alert("ss_for error: " + ss_for.message)
						}
					}
					break
				} else if (tr.innerText.contains("Симулятор боя (Alpha)")) {
					if (show_derevo) alert('Симулятор боя (Alpha)');
					setSimulatorData("fromMainFrame");
					break
				} else if (tr.innerText.contains("Информация о шпионаже")) {
					if (show_derevo) alert('Информация о шпионаже');
					var element = "";
					var x_dat   = tr.firstChild.nextElementSibling.innerText;
					var sucess  = true;
					try {
						element    = tr.firstChild.nextSibling.nextSibling;
						var z_elem = element.innerText
					} catch (elem) {
						sucess = false
					}
					try {
						if (sucess) {
							if (element.innerText == "Сообщение флота") {
								try {
									var g                                                                       = 1;
									var s                                                                       = 1;
									var p                                                                       = 1;
									element.parentNode.firstChild.nextSibling.nextSibling.nextSibling.innerHTML = tr.firstChild.nextSibling.nextSibling.nextSibling.innerHTML.rep("Информация о шпионаже", "Скан");
									var temp_koords                                                             = element.parentNode.firstChild.nextSibling.nextSibling.nextSibling.innerText;
									var koords                                                                  = temp_koords.split("[")[1].split("]")[0].split(":");
									g                                                                           = koords[0];
									s                                                                           = koords[1];
									p                                                                           = koords[2];
									main_g                                                                      = g;
									main_s                                                                      = s;
									main_p                                                                      = p
								} catch (chn) {}
								try {
									var info_table_tbody = element.parentNode.nextSibling.firstChild.nextSibling.firstChild.firstChild;
									var scanData         = info_table_tbody.children;
									var x_res            = '';
									var x_pla            = '';
									for (var d in scanData) {
										try {
											var x_arr   = scanData[d].firstElementChild.lastChild.children;
											var x_group = scanData[d].firstElementChild.firstChild.innerText;
											if (d == 0) {
												x_group  = scanData[d].innerText.split(']')[0] + ']';
												var type = 'P';
												if (x_group.contains('на луне')) type = 'L';
												if (x_group.contains('Station')) type = 'S';
												x_pla = '[' + g + ':' + s + ':' + p + ']' + type + '';
												x_res += x_pla + '(' + x_dat + ')' + ''
											} else {
												if (x_group.contains('Флот')) x_res += 'Sputniks:'
											}
											if (x_group.contains('Флот')) {
												for (var o in x_arr) {
													try {
														var x_one = x_arr[o].innerText;
														if (x_one.contains('Солнечный спутник')) x_res += 'SS=' + x_one.split(': ')[1] + '; ';
														if (x_one.contains('Топливный спутник')) x_res += 'TS=' + x_one.split(': ')[1] + '; '
													} catch (ep) {}
												}
											}
										} catch (ed) {}
									}
									x_res     = x_res.replace('&', '');
									var g_x   = top.Mainframe.document.getElementsByTagName("a")[0].baseURI;
									var n_x   = g_x.split(".")[0];
									var x_uni = n_x.split("//")[1];
									make_temp_iframe('http://www.esterx.com/owars/index.php?' + 'xun=' + x_uni + '&xdt=' + x_dat + '&xpl=' + x_pla + '&xsc=' + x_res);
									var resourses = info_table_tbody.firstChild;
									var r_titan   = 0;
									var r_krem    = 0;
									var r_topl    = 0;
									var titan_raw = resourses.firstChild.lastChild.firstChild.innerText;
									var krem_raw  = resourses.firstChild.lastChild.firstChild.nextSibling.innerText;
									var topl_raw  = resourses.firstChild.lastChild.firstChild.nextSibling.nextSibling.innerText;
									var titan     = parseInt(titan_raw.split(":")[1].rep(".", ""), 10);
									var krem      = parseInt(krem_raw.split(":")[1].rep(".", ""), 10);
									var topl      = parseInt(topl_raw.split(":")[1].rep(".", ""), 10);
									var itogo     = titan + krem + topl;
									var bt        = parseInt((itogo / 50000).toFixed(), 10);
									var mt        = parseInt((itogo / 10000).toFixed(), 10);
									if ((itogo > 0) && (mt == 0)) {
										mt = 1;
										bt = 1
									}
									if ((itogo > 0) && (bt == 0)) {
										bt = 1
									}
									try {
										var flots              = resourses.nextSibling;
										var postrojki          = flots.nextSibling;
										var oborona            = postrojki.nextSibling;
										var issledovanija      = oborona.nextSibling;
										var is_flot_present    = true;
										var is_oborona_present = true;
										if (flots.innerText.contains("Не имеет")) is_flot_present = false;
										if (oborona.innerText.contains("Не имеет")) is_oborona_present = false;
										var is_free_access = false;
										if ((!is_flot_present) && (!is_oborona_present)) is_free_access = true;
										try {
											tech1 = issledovanija.firstChild.lastChild.firstChild.nextSibling.nextSibling.lastChild.innerText
										} catch (t1_) {
											tech1 = '?'
										}
										try {
											tech2 = issledovanija.firstChild.lastChild.firstChild.nextSibling.nextSibling.nextSibling.lastChild.innerText
										} catch (t1_) {
											tech2 = '?'
										}
										try {
											tech3 = issledovanija.firstChild.lastChild.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.lastChild.innerText
										} catch (t1_) {
											tech3 = '?'
										}
										f217 = "0";
										f216 = "0";
										f210 = "0";
										f212 = "0";
										f202 = "0";
										f203 = "0";
										f204 = "0";
										f219 = "0";
										f205 = "0";
										f206 = "0";
										f207 = "0";
										f208 = "0";
										f209 = "0";
										f218 = "0";
										f211 = "0";
										f215 = "0";
										f213 = "0";
										f214 = "0";
										f221 = "0";
										f222 = "0";
										f223 = "0";
										f401 = "0";
										f402 = "0";
										f403 = "0";
										f405 = "0";
										f404 = "0";
										f406 = "0";
										f409 = "0";
										f407 = "0";
										f408 = "0";
										f502 = "0";
										f503 = "0";
										f410 = "0";
										f411 = "0";
										f412 = "0";
										f413 = "0";
										if (is_flot_present) {
											var f_arr = flots.firstChild.lastChild.children;
											for (var io = 0; io < f_arr.length; io++) {
												try {
													var f_one      = f_arr[io];
													var f_one_name = f_one.firstChild.innerText;
													var f_one_data = f_one.lastChild.innerText.rep(".", "");
													var f_one_var  = getVarFromName(f_one_name);
													if (f_one_var != "") {
														eval(f_one_var + "=" + f_one_data)
													}
												} catch (ef) {}
											}
										}
										if (is_oborona_present) {
											var o_arr = oborona.firstChild.lastChild.children;
											for (var io = 0; io < o_arr.length; io++) {
												try {
													var o_one      = o_arr[io];
													var o_one_name = o_one.firstChild.innerText;
													var o_one_data = o_one.lastChild.innerText.rep(".", "");
													var o_one_var  = getVarFromName(o_one_name);
													if (o_one_var != "") {
														eval(o_one_var + "=" + o_one_data)
													}
												} catch (eo) {}
											}
										}
										var target_data = g + "," + s + "," + p + "," + tech1 + "," + tech2 + "," + tech3 + "," + f217 + "," + f216 + "," + f210 + "," + f212 + "," + f202 + "," + f203 + "," + f204 + "," + f219 + "," + f205 + "," + f206 + "," + f207 + "," + f208 + "," + f209 + "," + f218 + "," + f211 + "," + f215 + "," + f213 + "," + f214 + "," + f221 + "," + f222 + "," + f223 + "," + f401 + "," + f402 + "," + f403 + "," + f405 + "," + f404 + "," + f406 + "," + f409 + "," + f407 + "," + f408 + "," + f502 + "," + f503 + "," + f410 + "," + f411 + "," + f412 + "," + f413;
										var sim         = document.createElement("span");
										sim.setAttribute("style", "color:dodgerblue; position:relative;");
										sim.innerHTML = "&nbsp;(<a href='?mode=fleet&option=battle_simulator' target='SimulatorWindow' onclick='toSim(" + target_data + ");'>Симулятор&nbsp;боя</a>)&nbsp;";
										resourses.firstChild.firstChild.nextSibling.appendChild(sim);
										element.innerHTML = "<span style='color:" + (is_free_access ? "lime" : "#FF3E3E") + ";'>Шпионаж&nbsp;(" + "<a href='?mode=fleet&g=" + g + "&s=" + s + "&p=" + p + "&t=1&m=1' target='_blank'><span style='color:white;'>" + bt + "</span>бт&nbsp;<span style='color:white;'>" + mt + "</span>мт</a>)</span>"
									} catch (rnf) {
										element.innerHTML = "<span style='color:yellow;'>Шпионаж&nbsp;(" + "<a href='?mode=fleet&g=" + g + "&s=" + s + "&p=" + p + "&t=1&m=1' target='_blank'><span style='color:white;'>" + bt + "</span>бт&nbsp;<span style='color:white;'>" + mt + "</span>мт</a>)</span>"
									}
								} catch (ee) {}
							}
						}
					} catch (elemen) {
						if (show_errors) alert("elemen error: " + elemen.message)
					}
				} else if (tr.innerText.contains("Альянс [Доклад шпионажа]")) {
					if (show_derevo) alert('Альянс [Доклад шпионажа]');
					var element = "";
					var sucess  = true;
					try {
						element    = tr.firstChild.nextSibling.nextSibling;
						var z_elem = element.innerText
					} catch (elem) {
						sucess = false
					}
					try {
						if (sucess) {
							if (element.innerText == "Сообщение флота") {
								try {
									var g                                                                       = 1;
									var s                                                                       = 1;
									var p                                                                       = 1;
									element.parentNode.firstChild.nextSibling.nextSibling.nextSibling.innerHTML = tr.firstChild.nextSibling.nextSibling.nextSibling.innerHTML.rep("Информация о шпионаже", "Скан");
									var temp_koords                                                             = element.parentNode.firstChild.nextSibling.nextSibling.nextSibling.innerText;
									var koords                                                                  = temp_koords.split("[")[1].split("]")[0].split(":");
									g                                                                           = koords[0];
									s                                                                           = koords[1];
									p                                                                           = koords[2];
									main_g                                                                      = g;
									main_s                                                                      = s;
									main_p                                                                      = p
								} catch (chn) {}
								try {
									var info_table_tbody = element.parentNode.nextSibling.firstChild.nextSibling.firstChild.firstChild;
									var resourses        = info_table_tbody.firstChild;
									var r_titan          = 0;
									var r_krem           = 0;
									var r_topl           = 0;
									var titan_raw        = resourses.firstChild.lastChild.firstChild.innerText;
									var krem_raw         = resourses.firstChild.lastChild.firstChild.nextSibling.innerText;
									var topl_raw         = resourses.firstChild.lastChild.firstChild.nextSibling.nextSibling.innerText;
									var titan            = parseInt(titan_raw.split(":")[1].rep(".", ""), 10);
									var krem             = parseInt(krem_raw.split(":")[1].rep(".", ""), 10);
									var topl             = parseInt(topl_raw.split(":")[1].rep(".", ""), 10);
									var itogo            = titan + krem + topl;
									var bt               = parseInt((itogo / 50000).toFixed(), 10);
									var mt               = parseInt((itogo / 10000).toFixed(), 10);
									if ((itogo > 0) && (mt == 0)) {
										mt = 1;
										bt = 1
									}
									if ((itogo > 0) && (bt == 0)) {
										bt = 1
									}
									try {
										var flots              = resourses.nextSibling;
										var postrojki          = flots.nextSibling;
										var oborona            = postrojki.nextSibling;
										var issledovanija      = oborona.nextSibling;
										var is_flot_present    = true;
										var is_oborona_present = true;
										if (flots.innerText == "ФлотНе имеет.") is_flot_present = false;
										if (oborona.innerText == "ОборонаНе имеет.") is_oborona_present = false;
										var is_free_access = false;
										if ((!is_flot_present) && (!is_oborona_present)) is_free_access = true;
										tech1 = issledovanija.firstChild.lastChild.firstChild.nextSibling.nextSibling.lastChild.innerText;
										tech2 = issledovanija.firstChild.lastChild.firstChild.nextSibling.nextSibling.nextSibling.lastChild.innerText;
										tech3 = issledovanija.firstChild.lastChild.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.lastChild.innerText;
										f217  = "0";
										f216  = "0";
										f210  = "0";
										f212  = "0";
										f202  = "0";
										f203  = "0";
										f204  = "0";
										f219  = "0";
										f205  = "0";
										f206  = "0";
										f207  = "0";
										f208  = "0";
										f209  = "0";
										f218  = "0";
										f211  = "0";
										f215  = "0";
										f213  = "0";
										f214  = "0";
										f221  = "0";
										f222  = "0";
										f223  = "0";
										f401  = "0";
										f402  = "0";
										f403  = "0";
										f405  = "0";
										f404  = "0";
										f406  = "0";
										f409  = "0";
										f407  = "0";
										f408  = "0";
										f502  = "0";
										f503  = "0";
										f410  = "0";
										f411  = "0";
										f412  = "0";
										f413  = "0";
										if (flots.firstChild.innerText != "ФлотНе имеет.") {
											var f_arr = flots.firstChild.lastChild.children;
											for (var io = 0; io < f_arr.length; io++) {
												try {
													var f_one      = f_arr[io];
													var f_one_name = f_one.firstChild.innerText;
													var f_one_data = f_one.lastChild.innerText.rep(".", "");
													var f_one_var  = getVarFromName(f_one_name);
													if (f_one_var != "") {
														eval(f_one_var + "=" + f_one_data)
													}
												} catch (ef) {}
											}
										}
										if (oborona.firstChild.innerText != "ОборонаНе имеет.") {
											var o_arr = oborona.firstChild.lastChild.children;
											for (var io = 0; io < o_arr.length; io++) {
												try {
													var o_one      = o_arr[io];
													var o_one_name = o_one.firstChild.innerText;
													var o_one_data = o_one.lastChild.innerText.rep(".", "");
													var o_one_var  = getVarFromName(o_one_name);
													if (o_one_var != "") {
														eval(o_one_var + "=" + o_one_data)
													}
												} catch (eo) {}
											}
										}
										var target_data = g + "," + s + "," + p + "," + tech1 + "," + tech2 + "," + tech3 + "," + f217 + "," + f216 + "," + f210 + "," + f212 + "," + f202 + "," + f203 + "," + f204 + "," + f219 + "," + f205 + "," + f206 + "," + f207 + "," + f208 + "," + f209 + "," + f218 + "," + f211 + "," + f215 + "," + f213 + "," + f214 + "," + f221 + "," + f222 + "," + f223 + "," + f401 + "," + f402 + "," + f403 + "," + f405 + "," + f404 + "," + f406 + "," + f409 + "," + f407 + "," + f408 + "," + f502 + "," + f503 + "," + f410 + "," + f411 + "," + f412 + "," + f413;
										var sim         = document.createElement("span");
										sim.setAttribute("style", "color:dodgerblue; position:relative;");
										sim.innerHTML = "&nbsp;(<a href='?mode=fleet&option=battle_simulator' target='SimulatorWindow' onclick='toSim(" + target_data + ");'>Симулятор&nbsp;боя</a>)&nbsp;";
										resourses.firstChild.firstChild.nextSibling.appendChild(sim);
										element.innerHTML = "<span style='color:" + (is_free_access ? "lime" : "#FF3E3E") + ";'>Шпионаж&nbsp;(" + "<a href='?mode=fleet&g=" + g + "&s=" + s + "&p=" + p + "&t=1&m=1' target='_blank'><span style='color:white;'>" + bt + "</span>бт&nbsp;<span style='color:white;'>" + mt + "</span>мт</a>)</span>"
									} catch (rnf) {
										element.innerHTML = "<span style='color:yellow;'>Шпионаж&nbsp;(" + "<a href='?mode=fleet&g=" + g + "&s=" + s + "&p=" + p + "&t=1&m=1' target='_blank'><span style='color:white;'>" + bt + "</span>бт&nbsp;<span style='color:white;'>" + mt + "</span>мт</a>)</span>"
									}
								} catch (ee) {}
							}
						}
					} catch (elemen) {
						if (show_errors) alert("elemen error: " + elemen.message)
					}
				} else if (tr.innerText.contains("Список друзей")) {
					if (show_derevo) alert('Список друзей');
					break
				} else if (tr.innerText.contains("Постройки (Свободно полей:")) {
					if (show_derevo) alert('Постройки (Свободно полей:');
					break
				} else if (tr.innerText.contains("Обзор Империи")) {
					if (show_derevo) alert('Обзор Империи');
					var arr_titan = $names$('tag_res')[0].cells;
					var arr_krem  = $names$('tag_res')[1].cells;
					var arr_topl  = $names$('tag_res')[2].cells;
					var arr_ener  = $names$('tag_res')[3].cells;
					var titan     = 0;
					var krem      = 0;
					var topl      = 0;
					for (var oi = 1; oi < arr_titan.length - 1; oi++) {
						try {
							var t = arr_titan[oi].innerText.split(' / ')[1].rep('.', '');
							titan += parseInt(t, 10) * 24;
							var k = arr_krem[oi].innerText.split(' / ')[1].rep('.', '');
							krem += parseInt(k, 10) * 24;
							var d = arr_topl[oi].innerText.split(' / ')[1].rep('.', '');
							topl += parseInt(d, 10) * 24
						} catch (oi_for) {
							if (show_errors) alert("oi_for error: " + oi_for.message)
						}
					}
					var titan_dot                           = titan.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
					var krem_dot                            = krem.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
					var topl_dot                            = topl.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
					arr_titan[arr_titan.length - 1].innerHTML += "<br/><span style='color:dodgerblue;'>" + titan_dot + "</span>";
					arr_krem[arr_krem.length - 1].innerHTML += "<br/><span style='color:dodgerblue;'>" + krem_dot + "</span>";
					arr_topl[arr_topl.length - 1].innerHTML += "<br/><span style='color:dodgerblue;'>" + topl_dot + "</span>";
					arr_ener[arr_ener.length - 1].innerHTML = "<span style='color:white;' onclick='saveDayCapacity(" + titan + "," + krem + "," + topl + ")' onmouseover='this.style.color=\"dodgerblue\";' onmouseout='this.style.color=\"white\";'>Запомнить эту производительность</span>";
					break
				} else if (tr.innerText.contains("Аббревиатура")) {
					if (show_derevo) alert('Аббревиатура');
					break
				} else if (tr.innerText.contains("Производство сырья на")) {
					if (show_derevo) alert('Производство сырья на');
					try {
						var titan = 0;
						var krem  = 0;
						var topl  = 0;
						var trs   = $tags$('tr');
						for (var i = 0; i < trs.length; i++) {
							try {
								if (trs[i].innerHTML.contains('<i><b class="titanium">Титан</b></i>')) {
									var titan_raw = trs[i].nextElementSibling.firstElementChild.nextElementSibling.innerText.rep('.', '');
									var krem_raw  = trs[i].nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.innerText.rep('.', '');
									var topl_raw  = trs[i].nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerText.rep('.', '');
									titan         = parseInt(titan_raw, 10);
									krem          = parseInt(krem_raw, 10);
									topl          = parseInt(topl_raw, 10);
									break
								}
							} catch (etr) {}
						}
						var htitan     = 0;
						var hkrem      = 0;
						var htopl      = 0;
						var hcapac_raw = tr.parentElement.lastElementChild.previousElementSibling.previousElementSibling;
						var htitan_raw = hcapac_raw.firstElementChild.nextElementSibling.innerText.rep('.', '');
						var hkrem_raw  = hcapac_raw.firstElementChild.nextElementSibling.nextElementSibling.innerText.rep('.', '');
						var htopl_raw  = hcapac_raw.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerText.rep('.', '');
						htitan         = parseInt(htitan_raw, 10);
						hkrem          = parseInt(hkrem_raw, 10);
						htopl          = parseInt(htopl_raw, 10);
						if (htitan <= 0 || hkrem <= 0 || htopl <= 0) {}
						var sklad_titan = 0;
						var sklad_krem  = 0;
						var sklad_topl  = 0;
						var sklad_raw   = tr.parentElement.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling;
						var stitan_raw  = sklad_raw.firstElementChild.nextElementSibling.innerText.rep('.', '').rep(' k', '000');
						var skrem_raw   = sklad_raw.firstElementChild.nextElementSibling.nextElementSibling.innerText.rep('.', '').rep(' k', '000');
						var stopl_raw   = sklad_raw.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerText.rep('.', '').rep(' k', '000');
						sklad_titan     = parseInt(stitan_raw, 10);
						sklad_krem      = parseInt(skrem_raw, 10);
						sklad_topl      = parseInt(stopl_raw, 10);
						var time_titan  = (((sklad_titan - titan) / htitan) * 60 * 60).toFixed();
						var time_krem   = (((sklad_krem - krem) / hkrem) * 60 * 60).toFixed();
						var time_topl   = (((sklad_topl - topl) / htopl) * 60 * 60).toFixed();
						var time_table  = tr.parentElement.parentElement.nextElementSibling.lastElementChild.firstElementChild;
						var ttitan_raw  = time_table.firstElementChild.nextElementSibling.lastElementChild.firstElementChild;
						var tkrem_raw   = time_table.firstElementChild.nextElementSibling.nextElementSibling.lastElementChild.firstElementChild;
						var ttopl_raw   = time_table.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.lastElementChild.firstElementChild;
						if (time_titan > 0) {
							if (htitan > 0) ttitan_raw.innerHTML += "Заполнится: " + getTimeDateFormat(addSecondsToDate(new Date(), time_titan), false)
						} else {
							if (htitan > 0) ttitan_raw.innerHTML += "Склад уже полностью заполнен!"
						}
						if (time_krem > 0) {
							if (hkrem > 0) tkrem_raw.innerHTML += "Заполнится: " + getTimeDateFormat(addSecondsToDate(new Date(), time_krem), false)
						} else {
							if (hkrem > 0) tkrem_raw.innerHTML += "Склад уже полностью заполнен!"
						}
						if (time_topl > 0) {
							if (htopl > 0) ttopl_raw.innerHTML += "Заполнится: " + getTimeDateFormat(addSecondsToDate(new Date(), time_topl), false)
						} else {
							if (htopl > 0) ttopl_raw.innerHTML += "Склад уже полностью заполнен!"
						}
						break
					} catch (e) {
						alert('uh error: ' + e.message)
					}
				} else if (tr.innerText.contains("Флоты макс.")) {
					if (show_derevo) alert('Флоты макс.')
				} else if (tr.innerText.contains("Новая миссия:")) {
					if (show_derevo) alert('Новая миссия:');
					if (!tr.nextElementSibling.nextElementSibling.innerText.contains("Нет ниодного коробля")) {
						if (!tr.parentNode.innerText.contains("Достигнут максимум флота")) {
							var t_body_elements = tr.parentNode.children;
							for (var j = 2; j < (t_body_elements.length - 1); j++) {
								try {
									var one  = t_body_elements[j];
									var temp = one.lastElementChild.innerHTML;
									if (one.lastElementChild.previousElementSibling.innerText.contains("макс.")) {
										one.lastElementChild.innerHTML = "<div onclick='javascript:this.nextSibling.value=0; shortInfo();' onmouseover='this.style.color=\"red\";' onmouseout='this.style.color=\"white\";' style='text-align:center; display:inline-block; width:17px; height:17px; background:black; color:white; line-height:17px; margin-right:10px; border-radius:2px;'>0</div>" + temp + "<div onmouseover='this.style.color=\"red\";' onmouseout='this.style.color=\"white\";' onclick='javascript:var x=parseInt(this.previousElementSibling.value)-1; this.previousElementSibling.value=x<0?0:x; shortInfo();' style='text-align:center; display:inline-block; width:17px; height:17px; background:black; color:white; line-height:17px; margin-left:5px; border-radius:2px;'>-1</div>"
									}
								} catch (tbe) {
									if (show_errors) alert("tbe error: " + tbe.message)
								}
							}
							var temp_dp                                                          = $$("duration").parentElement.innerHTML;
							$$("duration").parentElement.innerHTML += "<div style='color:orange; position:relative; float:right; top:-13px;' id='time_duration'>-</div>";
							$$("duration2").parentElement.innerHTML += "<din style='color:orange; position:relative; float:right; top:-13px;' id='time_duration2'>-</div>";
							tr.firstElementChild.innerHTML                                       = "" + "<center>" + "<div onclick='javascript:maxShips();shortInfo();refreshInfo();maxResources();document.getElementsByName(\"mission\")[0].selectedIndex=3;destinyFix();document.getElementsByName(\"submit\")[0].setAttribute(\"onclick\",\"javascript:return;\");document.getElementsByName(\"submit\")[0].click();' onmouseover='this.style.color=\"red\";' onmouseout='this.style.color=\"white\";' style='text-align:center; display:inline-block; height:17px; background:transparent; color:white; line-height:17px; padding:0 3px 0 3px; margin:0 0px 0 0px; border-radius:2px;'><span style='color:dodgerblue;'>(</span>Срочно поднять весь флот: скорость 100%, все ресурсы!<span style='color:dodgerblue;'>)</span></div>" + "<div onclick='javascript:maxShips();document.getElementsByName(\"ship210\")[0].nextElementSibling.click();shortInfo();refreshInfo();getSavedState();destinyFix();' onmouseover='this.style.color=\"lime\";' onmouseout='this.style.color=\"white\";' style='text-align:center; display:inline-block; height:17px; background:transparent; color:white; line-height:17px; padding:0 3px 0 3px; margin:0 0px 0 0px; border-radius:2px;'><span style='color:dodgerblue;'>(</span>Сейв<span style='color:dodgerblue;'>)</span></div>" + "</center>";
							tr.parentElement.parentElement.parentElement.parentElement.innerHTML = tr.parentElement.parentElement.parentElement.parentElement.innerHTML.rep("shortInfo()", "shortInfo();refreshInfo()").rep("calculateTransportCapacity();", "calculateTransportCapacity();howMuchTransports()").rep("maxResource('1');", "maxResource('1');howMuchTransports()").rep("maxResource('2');", "maxResource('2');howMuchTransports()").rep("maxResource('3');", "maxResource('3');howMuchTransports()").rep("noResources()", "noResources();howMuchTransports()").rep("maxResources()", "maxResources();howMuchTransports()");
							var planet_name                                                      = $$("pselector")[$$("pselector").selectedIndex].innerText;
							var p_vid                                                            = 0;
							if (planet_name.contains("] (S)")) p_vid = 3;
							if (planet_name.contains("] (L)")) p_vid = 1;
							document.getElementsByName("planettype")[0].selectedIndex = p_vid;
							document.getElementsByName("mission")[0].parentNode.innerHTML += "<div onclick='javascript:setUserData(\"user_default_mission\",this.previousElementSibling.selectedIndex);alert(\"Сохранено!\");' onmouseover='this.style.color=\"black\";' onmouseout='this.style.color=\"white\";' style='text-align:center; display:inline-block; height:17px; background:transparent; color:white; line-height:17px; padding:0 2px 0 2px; margin:0 3px 0 3px; border-radius:2px;'><span style='color:dodgerblue;'>(</span>Запомнить<span style='color:dodgerblue;'>)</span></div>";
							var gud                                                   = getUserData("user_default_mission");
							document.getElementsByName("mission")[0].selectedIndex    = (gud == "" ? 0 : parseInt(gud, 10));
							document.getElementsByName("mission")[0].onchange();
							document.getElementsByName("submit")[0].parentNode.innerHTML += "  <input name=\"submitQ\" id=\"submitQ\" type=\"submit\" value=\"Быстро\" onclick=\"if(form.mission.options[form.mission.selectedIndex].innerHTML=='-'){return false;}\">" + "  <input name=\"submitS\" type=\"submit\" value=\"Сейв с запоминанием\" onclick=\"memorySave();if(form.mission.options[form.mission.selectedIndex].innerHTML=='-'){return false;}\">" + "";
							$$("remainingresources").parentElement.parentElement.parentElement.firstElementChild.firstElementChild.innerHTML += '<div style="display:inline-block; margin-left:50%;"><span id="bts" style="color:dodgerblue;">0</span>бт <span id="mts" style="color:dodgerblue;">0</span>мт</div>'
						}
					}
				} else if (tr.innerText.contains("Отправить флот")) {
					if (show_derevo) alert('Отправить флот')
				} else if (tr.outerHTML.contains("FF494A")) {
					if (show_derevo) alert('FF494A');
					try {
						f217     = "0";
						f216     = "0";
						f210     = "0";
						f212     = "0";
						f202     = "0";
						f203     = "0";
						f204     = "0";
						f219     = "0";
						f205     = "0";
						f206     = "0";
						f207     = "0";
						f208     = "0";
						f209     = "0";
						f218     = "0";
						f211     = "0";
						f215     = "0";
						f213     = "0";
						f214     = "0";
						f221     = "0";
						f222     = "0";
						f223     = "0";
						f401     = "0";
						f402     = "0";
						f403     = "0";
						f405     = "0";
						f404     = "0";
						f406     = "0";
						f409     = "0";
						f407     = "0";
						f408     = "0";
						f502     = "0";
						f503     = "0";
						f410     = "0";
						f411     = "0";
						f412     = "0";
						f413     = "0";
						var raw  = tr.lastElementChild.firstElementChild.getAttribute('onmouseover').split("escape('")[1].split("');")[0];
						var temp = document.createElement('div');
						temp.setAttribute('id', 'temp_div');
						temp.setAttribute('style', 'opacity:0;');
						temp.innerHTML = raw;
						$tag$('body').appendChild(temp);
						if ($$('temp_div').innerHTML.length > 0) {
							var f_arr = $$('temp_div').firstElementChild.firstElementChild.children;
							for (var io = 0; io < f_arr.length; io++) {
								try {
									var f_one      = f_arr[io];
									var f_one_name = f_one.firstChild.innerText;
									var f_one_data = f_one.lastChild.innerText.rep(".", "");
									var f_one_var  = getVarFromName(f_one_name);
									if (f_one_var != "") {
										eval(f_one_var + "=" + f_one_data)
									}
								} catch (ef) {}
							}
						}
						var g                                             = '0';
						var s                                             = '0';
						var p                                             = '0';
						var tech1                                         = '0';
						var tech2                                         = '0';
						var tech3                                         = '0';
						var target_data                                   = g + "," + s + "," + p + "," + tech1 + "," + tech2 + "," + tech3 + "," + f217 + "," + f216 + "," + f210 + "," + f212 + "," + f202 + "," + f203 + "," + f204 + "," + f219 + "," + f205 + "," + f206 + "," + f207 + "," + f208 + "," + f209 + "," + f218 + "," + f211 + "," + f215 + "," + f213 + "," + f214 + "," + f221 + "," + f222 + "," + f223 + "," + f401 + "," + f402 + "," + f403 + "," + f405 + "," + f404 + "," + f406 + "," + f409 + "," + f407 + "," + f408 + "," + f502 + "," + f503 + "," + f410 + "," + f411 + "," + f412 + "," + f413;
						tr.firstElementChild.nextElementSibling.innerHTML = '<span style="color:dodgerblue;">(</span><a onmouseover=\'this.style.color="yellow";\' onmouseout=\'this.style.color="white";\' href=\'?mode=fleet&option=battle_simulator\' target=\'SimulatorWindow\' onclick=\'toSim(' + target_data + ');\'>Симулятор</a><span style="color:dodgerblue;">)</span>'
					} catch (e6) {
						if (show_errors) alert("ataka error: " + e6.message)
					}
				} else if (tr.outerHTML.contains("CF00CB")) {
					try {} catch (ez) {}
				} else if (tr.outerHTML.contains("8F088C")) {
					try {} catch (ezx) {}
				} else if (((tr.innerText.contains("Планета")) || (tr.innerText.contains("Луна"))) && (tr.innerText.contains("(")) && (tr.innerText.contains(")"))) {
					if (show_derevo) alert('(Планета||Луна) && ( && )');
					try {} catch (e7) {
						if (show_errors) alert("scan error: " + e7.message)
					}
				} else if ((tr.innerText.contains("Статистика (Обновленно")) && (tr.innerText.contains("- Калькулятор Очков"))) {
					if (show_derevo) alert('Статистика (Обновленно && - Калькулятор Очков');
					break
				}
			} catch (e4) {
				if (show_errors) alert("init_script_MainFrame error: " + e4.message)
			}
		}
	} else if (window.name == "LeftMenu") {
		var trs   = document.getElementsByTagName("tr");
		var gs    = "";
		var gala  = "0";
		var sist  = "0";
		var index = 0;
		for (var i = 0; i < trs.length; i++) {
			try {
				var tr     = trs[i];
				var sucess = true;
				try {
					var z_elem = tr.innerText
				} catch (elem) {
					sucess = false
				}
				if (sucess) {
					if (tr.innerText.contains("Планетарий")) {
						if (typeof (window.localStorage.getItem("is_vova_userscript_on")) == "undefined") setUserData("is_vova_userscript_on", "true");
						var vova_script_on = true;
						if (getUserData("is_vova_userscript_on") != "true") vova_script_on = false;
						var scriptMenu = "<br/>" + "<span id='leftScriptMenu' style='color:dodgerblue; font-weight:bold; text-shadow:1px 1px 12px black;' onmouseover='menu_mouse_over(this)' onmouseout='menu_mouse_out(this)' onclick='script_menu()'>" + (vova_script_on ? "Скрипт:ON" : "Скрипт:OFF") + "</span>" + "";
						tr.parentNode.parentNode.previousElementSibling.innerHTML += scriptMenu;
						break
					}
				}
			} catch (e8) {
				if (show_errors) alert("init_LeftMenu error: " + e8.message)
			}
		}
	} else {
		try {
			if (getUserData("is_vova_userscript_on") != "true") return;
			var trs   = document.getElementsByTagName("tr");
			var gs    = "";
			var gala  = "0";
			var sist  = "0";
			var index = 0;
			for (var i = 0; i < trs.length; i++) {
				try {
					var tr = trs[i];
					if (tr.innerText.contains("Сражение продлилось")) {
						break
					} else if (tr.innerText.contains("Флоты макс.")) {
						break
					} else if (tr.innerText.contains("Симулятор боя (Alpha)")) {
						setSimulatorData("fromFree");
						break
					}
				} catch (elsewin) {
					if (show_errors) alert("elsewin error: " + elsewin.message)
				}
			}
		} catch (elsew) {
			if (show_errors) alert("elsew error: " + elsew.message)
		}
	}
};

function formSubmit() {
	try {} catch (e) {
		alert(e.message)
	}
}

function howMuchTransports() {
	var t     = parseInt(($name$('resource1').value == '' ? '0' : $name$('resource1').value), 10);
	var k     = parseInt(($name$('resource2').value == '' ? '0' : $name$('resource2').value), 10);
	var d     = parseInt(($name$('resource3').value == '' ? '0' : $name$('resource3').value), 10);
	var itogo = t + k + d;
	var bt    = parseInt((itogo / 25000).toFixed(), 10);
	var mt    = parseInt((itogo / 5000).toFixed(), 10);
	if (parseFloat((itogo / 25000), 10) > bt) bt++;
	if (parseFloat((itogo / 5000), 10) > mt) mt++;
	if ((itogo > 0) && (mt == 0)) {
		mt = 1;
		bt = 1
	}
	if ((itogo > 0) && (bt == 0)) {
		bt = 1
	}
	toContent('bts', bt);
	toContent('mts', mt)
}

function showInfo(name) {
	live('div', 'short_info', true);
	$$('short_info').style.display = 'block';
	$$('short_info').style         = "left:0px; top:0px; width:250px; height:250px; background:white; border-radius:10px; border:2px solid dodgerblue; opacity:1; color:black; position:fixed; z-order:9999;";
	var text                       = getUserData('short_' + name + '_info');
	$$('short_info').innerHTML     = "<center onclick='save_info(\"" + name + "\");' style='font-size:20px; color:white; text-shadow:0px 0px 10px blue;'>" + name + "</center><center><textarea id='info_area' style='color:white; background:black; width=90%; height:79%; overflow-y:auto; overflow-x:hidden;'>" + (text == '' ? 'Информация отсутствует...' : text) + "</textarea></center><center onclick='this.parentElement.style.display=\"none\";kill(\"short_info\");' style='font-size:20px; color:white; text-shadow:0px 0px 10px red;'>&times;</center>"
}

function save_info(name) {
	var info = $$('info_area').value;
	setUserData('short_' + name + '_info', info);
	alert('Информация успешно сохранена!');
	kill('short_info')
}

function toTotalCountTime(idx) {
	var time_total = 0;
	try {
		time_total = getSecondsFromRaw($$('time_total').innerHTML)
	} catch (ttt) {}
	var one_time_raw = $$('hidden_' + idx).innerHTML;
	var one_seconds  = getSecondsFromRaw(one_time_raw);
	var one_count    = parseInt($name$('buy[' + idx + ']').value, 10);
	var all_time     = one_seconds * one_count;
	if (one_count > 0) {
		$$('lot_' + idx).innerHTML   = 'Это производство займёт по времени: ' + getTimesFormat(all_time);
		$$('total_' + idx).innerHTML = 'Производство завершится: ' + getTimeDateFormat(addSecondsToDate(new Date(), (all_time + time_total)), false)
	} else {
		$$('lot_' + idx).innerHTML   = '&nbsp;';
		$$('total_' + idx).innerHTML = '&nbsp;'
	}
}

function getSavedState() {
	var coords_s = "saved_" + $name$("thisgalaxy").value + "_" + $name$("thissystem").value + "_" + $name$("thisplanet").value;
	var s        = getUserData(coords_s);
	if (s != "") {
		try {
			var raw                            = s.split("|");
			var dest_g                         = raw[0].split("_")[0];
			var dest_s                         = raw[0].split("_")[1];
			var dest_p                         = raw[0].split("_")[2];
			var dest_pt                        = raw[1];
			var speed                          = raw[2];
			var mission                        = raw[3];
			$name$("galaxy").value             = dest_g;
			$name$("system").value             = dest_s;
			$name$("planet").value             = dest_p;
			$name$("planettype").selectedIndex = parseInt(dest_pt, 10);
			$name$("speed").selectedIndex      = parseInt(speed, 10);
			$name$("mission").selectedIndex    = parseInt(mission, 10);
			shortInfo();
			refreshInfo();
			maxResources()
		} catch (e) {
			if (show_errors) alert("gss error: " + e.message)
		}
	}
}

function memorySave() {
	try {
		var coords_s   = $name$("thisgalaxy").value + "_" + $name$("thissystem").value + "_" + $name$("thisplanet").value;
		var coords_d   = $name$("galaxy").value + "_" + $name$("system").value + "_" + $name$("planet").value;
		var planettype = $name$("planettype").selectedIndex;
		var speed      = $name$("speed").selectedIndex;
		var mission    = $name$("mission").selectedIndex;
		var to_save    = coords_d + "|" + planettype + "|" + speed + "|" + mission;
		setUserData("saved_" + coords_s, to_save);
		alert("Сохранено!")
	} catch (e) {
		if (show_errors) alert("gss error: " + e.message)
	}
}

function setUserData(keyName, keyValue) {
	window.localStorage.setItem(keyName, keyValue)
}

function getUserData(keyName) {
	var resValue = "";
	if ((typeof (window.localStorage.getItem(keyName)) != "undefined") && (window.localStorage.getItem(keyName) != null)) resValue = window.localStorage.getItem(keyName);
	return resValue
}

function saveDayCapacity(t, k, d) {
	setUserData('titan_day_capacity', t);
	setUserData('krem_day_capacity', k);
	setUserData('topl_day_capacity', d);
	alert('Суточная производительность Империи сохранена!')
}

function loadDayCapacity(res_name) {
	if (res_name == 'titan') return getUserData('titan_day_capacity');
	if (res_name == 'krem') return getUserData('krem_day_capacity');
	if (res_name == 'topl') return getUserData('topl_day_capacity')
}

function getSecondsFromRaw(time_raw) {
	var d       = 0;
	var h       = 0;
	var m       = 0;
	var s       = 0;
	var t_array = time_raw.split(" ");
	for (var i = 0; i < t_array.length; i++) {
		if (t_array[i].getLast() == "d") {
			d = parseInt(t_array[i].split("d")[0], 10)
		} else if (t_array[i].getLast() == "h") {
			h = parseInt(t_array[i].split("h")[0], 10)
		} else if (t_array[i].getLast() == "m") {
			m = parseInt(t_array[i].split("m")[0], 10)
		} else if (t_array[i].getLast() == "s") {
			s = parseInt(t_array[i].split("s")[0], 10)
		}
	}
	var time_raw_in_seconds = s + (m * 60) + (h * 60 * 60) + (d * 60 * 60 * 24);
	return time_raw_in_seconds
}

function addCurrTimeRaw(time_to_add_raw) {
	var time_to_add_in_seconds = getSecondsFromRaw(time_to_add_raw);
	var time_now               = getTimeNowInSeconds();
	var dest_time              = time_now + time_to_add_in_seconds;
	return getTimesFormat(dest_time)
}

function addCurrTimeSeconds(time_to_add_in_seconds) {
	var time_now  = getTimeNowInSeconds();
	var dest_time = time_now + time_to_add_in_seconds;
	return getTimesFormat(dest_time)
}

function refreshInfo() {
	try {
		var dur_one            = $$("duration");
		var dur_all            = $$("duration2");
		var d_one_raw          = dur_one.innerHTML;
		var d_all_raw          = dur_all.innerHTML;
		var time_dur_one       = $$("time_duration");
		var time_dur_all       = $$("time_duration2");
		time_dur_one.innerHTML = d_one_raw == "-" ? "-" : addCurrTimeRaw(d_one_raw);
		time_dur_all.innerHTML = d_all_raw == "-" ? "-" : addCurrTimeRaw(d_all_raw)
	} catch (ri) {
		if (show_errors) alert("refreshInfo error: " + ri.message)
	}
}

function setSimulatorData(from) {
	try {
		var target_window = window;
		if (from == "fromMainFrame") {
			target_window = window
		} else if (from == "fromFree") {
			target_window = window.opener
		}
		if (target_window.aORz == 'a') {
			var coord = document.createElement("span");
			coord.setAttribute("id", "destination");
			coord.setAttribute("style", "color:orange;");
			coord.innerHTML = " [<span id='g'>" + (typeof (target_window.main_g) != "undefined" ? target_window.main_g : "1") + "</span>:<span id='s'>" + (typeof (target_window.main_s) != "undefined" ? target_window.main_s : "1") + "</span>:<span id='p'>" + (typeof (target_window.main_p) != "undefined" ? target_window.main_p : "1") + "</span>] ";
			document.getElementsByName("tech1[109]")[0].parentNode.parentNode.previousElementSibling.previousElementSibling.firstElementChild.appendChild(coord);
			document.getElementsByName("tech1[109]")[0].value = window.localStorage.getItem("player_tech1");
			document.getElementsByName("tech1[110]")[0].value = window.localStorage.getItem("player_tech2");
			document.getElementsByName("tech1[111]")[0].value = window.localStorage.getItem("player_tech3");
			var save                                          = document.createElement("span");
			save.setAttribute("style", "color:#A5FF4B;");
			save.setAttribute("onmouseover", "javascript:this.style.color='dodgerblue';");
			save.setAttribute("onmouseout", "javascript:this.style.color='#A5FF4B';");
			save.setAttribute("onclick", "savePlayerTech('a')");
			save.innerHTML = " Запомнить технологии Атакующего ";
			document.getElementsByName("tech1[109]")[0].parentNode.parentNode.previousElementSibling.firstChild.nextSibling.appendChild(save);
			try {
				document.getElementsByName("tech2[109]")[0].value = typeof (target_window.tech1) != "undefined" ? target_window.tech1 : "0"
			} catch (c) {}
			try {
				document.getElementsByName("tech2[110]")[0].value = typeof (target_window.tech2) != "undefined" ? target_window.tech2 : "0"
			} catch (c) {}
			try {
				document.getElementsByName("tech2[111]")[0].value = typeof (target_window.tech3) != "undefined" ? target_window.tech3 : "0"
			} catch (c) {}
			try {
				document.getElementsByName("fleet2[217]")[0].value = typeof (target_window.f217) != "undefined" ? target_window.f217 : "0"
			} catch (c) {}
			try {
				document.getElementsByName("fleet2[216]")[0].value = typeof (target_window.f216) != "undefined" ? target_window.f216 : "0"
			} catch (c) {}
			try {
				document.getElementsByName("fleet2[210]")[0].value = typeof (target_window.f210) != "undefined" ? target_window.f210 : "0"
			} catch (c) {}
			try {
				document.getElementsByName("fleet2[212]")[0].value = typeof (target_window.f212) != "undefined" ? target_window.f212 : "0"
			} catch (c) {}
			try {
				document.getElementsByName("fleet2[202]")[0].value = typeof (target_window.f202) != "undefined" ? target_window.f202 : "0"
			} catch (c) {}
			try {
				document.getElementsByName("fleet2[203]")[0].value = typeof (target_window.f203) != "undefined" ? target_window.f203 : "0"
			} catch (c) {}
			try {
				document.getElementsByName("fleet2[204]")[0].value = typeof (target_window.f204) != "undefined" ? target_window.f204 : "0"
			} catch (c) {}
			try {
				document.getElementsByName("fleet2[219]")[0].value = typeof (target_window.f219) != "undefined" ? target_window.f219 : "0"
			} catch (c) {}
			try {
				document.getElementsByName("fleet2[205]")[0].value = typeof (target_window.f205) != "undefined" ? target_window.f205 : "0"
			} catch (c) {}
			try {
				document.getElementsByName("fleet2[206]")[0].value = typeof (target_window.f206) != "undefined" ? target_window.f206 : "0"
			} catch (c) {}
			try {
				document.getElementsByName("fleet2[207]")[0].value = typeof (target_window.f207) != "undefined" ? target_window.f207 : "0"
			} catch (c) {}
			try {
				document.getElementsByName("fleet2[208]")[0].value = typeof (target_window.f208) != "undefined" ? target_window.f208 : "0"
			} catch (c) {}
			try {
				document.getElementsByName("fleet2[209]")[0].value = typeof (target_window.f209) != "undefined" ? target_window.f209 : "0"
			} catch (c) {}
			try {
				document.getElementsByName("fleet2[218]")[0].value = typeof (target_window.f218) != "undefined" ? target_window.f218 : "0"
			} catch (c) {}
			try {
				document.getElementsByName("fleet2[211]")[0].value = typeof (target_window.f211) != "undefined" ? target_window.f211 : "0"
			} catch (c) {}
			try {
				document.getElementsByName("fleet2[215]")[0].value = typeof (target_window.f215) != "undefined" ? target_window.f215 : "0"
			} catch (c) {}
			try {
				document.getElementsByName("fleet2[213]")[0].value = typeof (target_window.f213) != "undefined" ? target_window.f213 : "0"
			} catch (c) {}
			try {
				document.getElementsByName("fleet2[214]")[0].value = typeof (target_window.f214) != "undefined" ? target_window.f214 : "0"
			} catch (c) {}
			try {
				document.getElementsByName("fleet2[221]")[0].value = typeof (target_window.f221) != "undefined" ? target_window.f221 : "0"
			} catch (c) {}
			try {
				document.getElementsByName("fleet2[222]")[0].value = typeof (target_window.f222) != "undefined" ? target_window.f222 : "0"
			} catch (c) {}
			try {
				document.getElementsByName("fleet2[223]")[0].value = typeof (target_window.f223) != "undefined" ? target_window.f223 : "0"
			} catch (c) {}
			try {
				document.getElementsByName("fleet2[401]")[0].value = typeof (target_window.f401) != "undefined" ? target_window.f401 : "0"
			} catch (c) {}
			try {
				document.getElementsByName("fleet2[402]")[0].value = typeof (target_window.f402) != "undefined" ? target_window.f402 : "0"
			} catch (c) {}
			try {
				document.getElementsByName("fleet2[403]")[0].value = typeof (target_window.f403) != "undefined" ? target_window.f403 : "0"
			} catch (c) {}
			try {
				document.getElementsByName("fleet2[405]")[0].value = typeof (target_window.f405) != "undefined" ? target_window.f405 : "0"
			} catch (c) {}
			try {
				document.getElementsByName("fleet2[404]")[0].value = typeof (target_window.f404) != "undefined" ? target_window.f404 : "0"
			} catch (c) {}
			try {
				document.getElementsByName("fleet2[406]")[0].value = typeof (target_window.f406) != "undefined" ? target_window.f406 : "0"
			} catch (c) {}
			try {
				document.getElementsByName("fleet2[409]")[1].value = typeof (target_window.f409) != "undefined" ? target_window.f409 : "0"
			} catch (c) {}
			try {
				document.getElementsByName("fleet2[407]")[0].value = typeof (target_window.f407) != "undefined" ? target_window.f407 : "0"
			} catch (c) {}
			try {
				document.getElementsByName("fleet2[408]")[0].value = typeof (target_window.f408) != "undefined" ? target_window.f408 : "0"
			} catch (c) {}
			try {
				document.getElementsByName("fleet2[502]")[0].value = typeof (target_window.f502) != "undefined" ? target_window.f502 : "0"
			} catch (c) {}
			try {
				document.getElementsByName("fleet2[503]")[0].value = typeof (target_window.f503) != "undefined" ? target_window.f503 : "0"
			} catch (c) {}
			try {
				document.getElementsByName("fleet2[410]")[0].value = typeof (target_window.f410) != "undefined" ? target_window.f410 : "0"
			} catch (c) {}
			try {
				document.getElementsByName("fleet2[411]")[0].value = typeof (target_window.f411) != "undefined" ? target_window.f411 : "0"
			} catch (c) {}
			try {
				document.getElementsByName("fleet2[412]")[0].value = typeof (target_window.f412) != "undefined" ? target_window.f412 : "0"
			} catch (c) {}
			try {
				document.getElementsByName("fleet2[413]")[0].value = typeof (target_window.f413) != "undefined" ? target_window.f413 : "0"
			} catch (c) {}
			var ataka_data = (typeof (target_window.main_g) != "undefined" ? target_window.main_g : "1") + "," + (typeof (target_window.main_s) != "undefined" ? target_window.main_s : "1") + "," + (typeof (target_window.main_p) != "undefined" ? target_window.main_p : "1");
			var ataka      = document.createElement("span");
			ataka.setAttribute("style", "color:dodgerblue;");
			ataka.setAttribute("onmouseover", "javascript:this.style.color='#FF4B4B';");
			ataka.setAttribute("onmouseout", "javascript:this.style.color='dodgerblue';");
			ataka.setAttribute("onclick", "atakaFromSimulator(" + ataka_data + ")");
			ataka.innerHTML = " Атаковать выбранным флотом ";
			document.getElementsByName("simulator")[0].parentNode.previousElementSibling.appendChild(ataka)
		} else {
			var coord = document.createElement("span");
			coord.setAttribute("id", "destination");
			coord.setAttribute("style", "color:orange;");
			coord.innerHTML = " [входящая атака] ";
			document.getElementsByName("tech1[109]")[0].parentNode.parentNode.previousElementSibling.previousElementSibling.firstElementChild.appendChild(coord);
			document.getElementsByName("tech2[109]")[0].value = window.localStorage.getItem("player_tech1");
			document.getElementsByName("tech2[110]")[0].value = window.localStorage.getItem("player_tech2");
			document.getElementsByName("tech2[111]")[0].value = window.localStorage.getItem("player_tech3");
			var save                                          = document.createElement("span");
			save.setAttribute("style", "color:#A5FF4B;");
			save.setAttribute("onmouseover", "javascript:this.style.color='dodgerblue';");
			save.setAttribute("onmouseout", "javascript:this.style.color='#A5FF4B';");
			save.setAttribute("onclick", "savePlayerTech('z')");
			save.innerHTML = " Запомнить технологии Защитника ";
			document.getElementsByName("tech1[109]")[0].parentNode.parentNode.previousElementSibling.firstChild.nextSibling.appendChild(save);
			try {
				document.getElementsByName("tech1[109]")[0].value = typeof (target_window.tech1) != "undefined" ? target_window.tech1 : "0"
			} catch (c) {}
			try {
				document.getElementsByName("tech1[110]")[0].value = typeof (target_window.tech2) != "undefined" ? target_window.tech2 : "0"
			} catch (c) {}
			try {
				document.getElementsByName("tech1[111]")[0].value = typeof (target_window.tech3) != "undefined" ? target_window.tech3 : "0"
			} catch (c) {}
			try {
				document.getElementsByName("fleet1[217]")[0].value = typeof (target_window.f217) != "undefined" ? target_window.f217 : "0"
			} catch (c) {}
			try {
				document.getElementsByName("fleet1[216]")[0].value = typeof (target_window.f216) != "undefined" ? target_window.f216 : "0"
			} catch (c) {}
			try {
				document.getElementsByName("fleet1[210]")[0].value = typeof (target_window.f210) != "undefined" ? target_window.f210 : "0"
			} catch (c) {}
			try {
				document.getElementsByName("fleet1[212]")[0].value = typeof (target_window.f212) != "undefined" ? target_window.f212 : "0"
			} catch (c) {}
			try {
				document.getElementsByName("fleet1[202]")[0].value = typeof (target_window.f202) != "undefined" ? target_window.f202 : "0"
			} catch (c) {}
			try {
				document.getElementsByName("fleet1[203]")[0].value = typeof (target_window.f203) != "undefined" ? target_window.f203 : "0"
			} catch (c) {}
			try {
				document.getElementsByName("fleet1[204]")[0].value = typeof (target_window.f204) != "undefined" ? target_window.f204 : "0"
			} catch (c) {}
			try {
				document.getElementsByName("fleet1[219]")[0].value = typeof (target_window.f219) != "undefined" ? target_window.f219 : "0"
			} catch (c) {}
			try {
				document.getElementsByName("fleet1[205]")[0].value = typeof (target_window.f205) != "undefined" ? target_window.f205 : "0"
			} catch (c) {}
			try {
				document.getElementsByName("fleet1[206]")[0].value = typeof (target_window.f206) != "undefined" ? target_window.f206 : "0"
			} catch (c) {}
			try {
				document.getElementsByName("fleet1[207]")[0].value = typeof (target_window.f207) != "undefined" ? target_window.f207 : "0"
			} catch (c) {}
			try {
				document.getElementsByName("fleet1[208]")[0].value = typeof (target_window.f208) != "undefined" ? target_window.f208 : "0"
			} catch (c) {}
			try {
				document.getElementsByName("fleet1[209]")[0].value = typeof (target_window.f209) != "undefined" ? target_window.f209 : "0"
			} catch (c) {}
			try {
				document.getElementsByName("fleet1[218]")[0].value = typeof (target_window.f218) != "undefined" ? target_window.f218 : "0"
			} catch (c) {}
			try {
				document.getElementsByName("fleet1[211]")[0].value = typeof (target_window.f211) != "undefined" ? target_window.f211 : "0"
			} catch (c) {}
			try {
				document.getElementsByName("fleet1[215]")[0].value = typeof (target_window.f215) != "undefined" ? target_window.f215 : "0"
			} catch (c) {}
			try {
				document.getElementsByName("fleet1[213]")[0].value = typeof (target_window.f213) != "undefined" ? target_window.f213 : "0"
			} catch (c) {}
			try {
				document.getElementsByName("fleet1[214]")[0].value = typeof (target_window.f214) != "undefined" ? target_window.f214 : "0"
			} catch (c) {}
			try {
				document.getElementsByName("fleet1[221]")[0].value = typeof (target_window.f221) != "undefined" ? target_window.f221 : "0"
			} catch (c) {}
			try {
				document.getElementsByName("fleet1[222]")[0].value = typeof (target_window.f222) != "undefined" ? target_window.f222 : "0"
			} catch (c) {}
			try {
				document.getElementsByName("fleet1[223]")[0].value = typeof (target_window.f223) != "undefined" ? target_window.f223 : "0"
			} catch (c) {}
		}
	} catch (ssd) {
		if (show_errors) alert("ssd error: " + ssd.message)
	}
}

function getVarFromName(name) {
	var variable = "";
	if (name == "Пирамида") variable = "f217";
	if (name == "Валькирия") variable = "f216";
	if (name == "Шпионский зонд") variable = "f210";
	if (name == "Солнечный спутник") variable = "f212";
	if (name == "Малый транспорт") variable = "f202";
	if (name == "Большой транспорт") variable = "f203";
	if (name == "Лёгкий истребитель") variable = "f204";
	if (name == "Вимв") variable = "f219";
	if (name == "Тяжёлый истребитель") variable = "f205";
	if (name == "Крейсер") variable = "f206";
	if (name == "Линкор") variable = "f207";
	if (name == "Колонизатор") variable = "f208";
	if (name == "Переработчик") variable = "f209";
	if (name == "Грав") variable = "f218";
	if (name == "Бомбардировщик-М") variable = "f211";
	if (name == "Линейный крейсер") variable = "f215";
	if (name == "Уничтожитель") variable = "f213";
	if (name == "Звезда смерти") variable = "f214";
	if (name == "Шмель") variable = "f221";
	if (name == "Пиратская Баржа") variable = "f222";
	if (name == "Топливный спутник") variable = "f223";
	if (name == "Ракетная установка") variable = "f401";
	if (name == "Лёгкий лазер") variable = "f402";
	if (name == "Тяжёлый лазер") variable = "f403";
	if (name == "Ионное орудие") variable = "f405";
	if (name == "Пушка Гаусса") variable = "f404";
	if (name == "Плазменное орудие") variable = "f406";
	if (name == "Коралл") variable = "f409";
	if (name == "Малый щитовой купол") variable = "f407";
	if (name == "Большой щитовой купол") variable = "f408";
	if (name == "Ракета-перехватчик") variable = "f502";
	if (name == "Межпланетная ракета") variable = "f503";
	if (name == "Щитовой генератор Тиерон") variable = "f410";
	if (name == "Пушка Ренегат") variable = "f411";
	if (name == "Пусковая установка Хабард") variable = "f412";
	if (name == "Тактическое Гравитационное Орудие") variable = "f413";
	return variable
}

function savePlayerTech(az) {
	if (az == 'a') {
		window.localStorage.setItem("player_tech1", document.getElementsByName("tech1[109]")[0].value);
		window.localStorage.setItem("player_tech2", document.getElementsByName("tech1[110]")[0].value);
		window.localStorage.setItem("player_tech3", document.getElementsByName("tech1[111]")[0].value);
		alert("Технологии Атакующего сохранены!")
	} else {
		window.localStorage.setItem("player_tech1", document.getElementsByName("tech2[109]")[0].value);
		window.localStorage.setItem("player_tech2", document.getElementsByName("tech2[110]")[0].value);
		window.localStorage.setItem("player_tech3", document.getElementsByName("tech2[111]")[0].value);
		alert("Технологии Защитника сохранены!")
	}
}

function atakaFromSimulator(g, s, p) {
	var asim = window.open("?mode=fleet&g=" + g + "&s=" + s + "&p=" + p + "&t=1&m=1", "AtakaWindow");
	setTimeout(function () {
		try {
			asim.document.getElementsByName("ship217")[0].value = document.getElementsByName("fleet1[217]")[0].value
		} catch (e) {}
		try {
			asim.document.getElementsByName("ship216")[0].value = document.getElementsByName("fleet1[216]")[0].value
		} catch (e) {}
		try {
			asim.document.getElementsByName("ship210")[0].value = document.getElementsByName("fleet1[210]")[0].value
		} catch (e) {}
		try {
			asim.document.getElementsByName("ship202")[0].value = document.getElementsByName("fleet1[202]")[0].value
		} catch (e) {}
		try {
			asim.document.getElementsByName("ship203")[0].value = document.getElementsByName("fleet1[203]")[0].value
		} catch (e) {}
		try {
			asim.document.getElementsByName("ship204")[0].value = document.getElementsByName("fleet1[204]")[0].value
		} catch (e) {}
		try {
			asim.document.getElementsByName("ship219")[0].value = document.getElementsByName("fleet1[219]")[0].value
		} catch (e) {}
		try {
			asim.document.getElementsByName("ship205")[0].value = document.getElementsByName("fleet1[205]")[0].value
		} catch (e) {}
		try {
			asim.document.getElementsByName("ship206")[0].value = document.getElementsByName("fleet1[206]")[0].value
		} catch (e) {}
		try {
			asim.document.getElementsByName("ship207")[0].value = document.getElementsByName("fleet1[207]")[0].value
		} catch (e) {}
		try {
			asim.document.getElementsByName("ship208")[0].value = document.getElementsByName("fleet1[208]")[0].value
		} catch (e) {}
		try {
			asim.document.getElementsByName("ship209")[0].value = document.getElementsByName("fleet1[209]")[0].value
		} catch (e) {}
		try {
			asim.document.getElementsByName("ship218")[0].value = document.getElementsByName("fleet1[218]")[0].value
		} catch (e) {}
		try {
			asim.document.getElementsByName("ship211")[0].value = document.getElementsByName("fleet1[211]")[0].value
		} catch (e) {}
		try {
			asim.document.getElementsByName("ship215")[0].value = document.getElementsByName("fleet1[215]")[0].value
		} catch (e) {}
		try {
			asim.document.getElementsByName("ship213")[0].value = document.getElementsByName("fleet1[213]")[0].value
		} catch (e) {}
		try {
			asim.document.getElementsByName("ship214")[0].value = document.getElementsByName("fleet1[214]")[0].value
		} catch (e) {}
		try {
			asim.document.getElementsByName("ship221")[0].value = document.getElementsByName("fleet1[221]")[0].value
		} catch (e) {}
		try {
			asim.document.getElementsByName("ship222")[0].value = document.getElementsByName("fleet1[222]")[0].value
		} catch (e) {}
		asim.shortInfo();
		asim.focus()
	}, 2999)
}

function toSim(gx, sx, px, tech1x, tech2x, tech3x, f217x, f216x, f210x, f212x, f202x, f203x, f204x, f219x, f205x, f206x, f207x, f208x, f209x, f218x, f211x, f215x, f213x, f214x, f221x, f222x, f223x, f401x, f402x, f403x, f405x, f404x, f406x, f409x, f407x, f408x, f502x, f503x, f410x, f411x, f412x, f413x) {
	aORz = 'a';
	if ((gx == '0') && (sx == '0') && (px == '0')) aORz = 'z';
	main_g  = gx;
	main_s  = sx;
	main_p  = px;
	tech1   = tech1x;
	tech2   = tech2x;
	tech3   = tech3x;
	f217    = f217x;
	f216    = f216x;
	f210    = f210x;
	f212    = f212x;
	f202    = f202x;
	f203    = f203x;
	f204    = f204x;
	f219    = f219x;
	f205    = f205x;
	f206    = f206x;
	f207    = f207x;
	f208    = f208x;
	f209    = f209x;
	f218    = f218x;
	f211    = f211x;
	f215    = f215x;
	f213    = f213x;
	f214    = f214x;
	f221    = f221x;
	f222    = f222x;
	f223    = f223x;
	f401    = f401x;
	f402    = f402x;
	f403    = f403x;
	f405    = f405x;
	f404    = f404x;
	f406    = f406x;
	f409    = f409x;
	f407    = f407x;
	f408    = f408x;
	f502    = f502x;
	f503    = f503x;
	f410    = f410x;
	f411    = f411x;
	f412    = f412x;
	f413    = f413x;
	var sim = window.open("?mode=fleet&option=battle_simulator", "SimulatorWindow");
	sim.focus()
}

function show_t(titan, krem, toplivo) {
	return escape("<table width=&quot;100%&quot;><tr><td class=&quot;c&quot; colspan=&quot;2&quot;>Ресурсы на планете</td></tr><tr><td>Титан: " + titan + "</td></tr><tr><td>Кремний: " + krem + "</td></tr><tr><td>Топливо: " + toplivo + "</td></tr></table>")
}

window.onload = function () {
	try {
		init_script()
	} catch (w) {
		if (show_errors) "init_script error: " + alert(w.message)
	}
};

