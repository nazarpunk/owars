"use strict";{const e=e=>{let t=e.split(" "),n=0;for(let e=0;e<t.length;e++){const l=t[e].slice(-1),i=parseInt(t[e].replace(/(\d+)\w/g,"$1"));"d"===l&&(n+=60*i*60*24),"h"===l&&(n+=60*i*60),"m"===l&&(n+=60*i),"s"===l&&(n+=i)}return n},t=e=>new Date(e.getTime()-6e4*e.getTimezoneOffset()).toISOString().replace("T"," ").substring(0,19),n=e=>{const n=new Date(1e3*e);return t(new Date(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds()))},l=()=>{const l=document.querySelectorAll('table[width="530"]')[1];if(l&&l.querySelectorAll("tr").length>1){const r=l.querySelectorAll("tr:not(:first-child)");for(let l=0;l<r.length;l++){const i=r[l].firstElementChild.nextElementSibling,s=i.nextElementSibling,o=s.firstElementChild.outerHTML,m=s.firstElementChild.nextElementSibling.innerHTML;if(!s.firstElementChild.nextElementSibling.nextElementSibling)continue;const d="IMG"===s.firstElementChild.nextElementSibling.nextElementSibling.nodeName?s.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML:s.firstElementChild.nextElementSibling.nextElementSibling.innerHTML,c=null!==s.lastChild.nodeValue?s.lastChild.nodeValue.split(":")[1]:s.lastChild.outerHTML,g=e(r[l].firstChild.firstElementChild.innerHTML);for(let e=l+1;e<r.length;e++){const s=r[e].firstElementChild.nextElementSibling.nextElementSibling,a=s.firstElementChild.outerHTML,E=s.firstElementChild.nextElementSibling.innerHTML,h="IMG"===s.firstElementChild.nextElementSibling.nextElementSibling.nodeName?s.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML:s.firstElementChild.nextElementSibling.nextElementSibling.innerHTML,u=null!=s.lastChild.nodeValue?s.lastChild.nodeValue.split(":")[1]:s.lastChild.outerHTML;if(a===o&&E===d&&h===m&&u===c){const s=parseInt(r[e].firstChild.firstElementChild.attributes.alt.value),o=new Date(n(s));o.setSeconds(o.getSeconds()-2*g),1===r[l].firstChild.nextElementSibling.childElementCount&&(i.innerHTML+=`<div class="return_time" style="min-width: 75px;">${t(o)}</div>`);break}}}i()}},i=()=>{const e=document.getElementsByClassName("return_time");setInterval(()=>{for(let n=0;n<e.length;n++){const l=new Date(e[n].innerHTML);l.setSeconds(l.getSeconds()+2),e[n].innerHTML=t(l)}},1e3)};(()=>{const e=document.querySelector('th[colspan="3"]');if(null===e)return;const n=new Date(e.innerHTML);setInterval((function(){n.setSeconds(n.getSeconds()+1),e.innerHTML=t(n)}),1e3)})(),l(),document.querySelectorAll("th[width='360']").forEach(e=>{if(!/с\s+миссией:\s+Атаковать/.test(e.textContent))return;const t=e.parentElement;if(!(t instanceof HTMLTableRowElement))return;const n=t.querySelector(":scope > th:nth-child(1) a[id]"),l=1e3*+n.getAttribute("alt"),i=new Date(1e3*+n.getAttribute("alt"));console.log(l,n.textContent,i.toLocaleDateString(),i.toLocaleTimeString())})}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVuc2lvbi9wYWdlL29wdGlvbi9vdmVydmlldy9vdmVydmlldy50cyJdLCJuYW1lcyI6WyJnZXRfc2Vjb25kc19mcm9tX3JhdyIsInJhdyIsInJhd0FyciIsInNwbGl0IiwidG90YWxTZWNvbmRzIiwieiIsImxlbmd0aCIsInVuaXRUaW1lIiwic2xpY2UiLCJ1bml0IiwicGFyc2VJbnQiLCJyZXBsYWNlIiwiZGF0ZV9mb3JtYXQiLCJ0aW1lIiwiRGF0ZSIsImdldFRpbWUiLCJnZXRUaW1lem9uZU9mZnNldCIsInRvSVNPU3RyaW5nIiwic3Vic3RyaW5nIiwiZ2V0SHVtYW5UaW1lc3RhbXAiLCJ0aW1lc3RhbXAiLCJkYXRlIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImdldERhdGUiLCJnZXRIb3VycyIsImdldE1pbnV0ZXMiLCJnZXRTZWNvbmRzIiwicmV0dXJuRmxlZXRUaW1lciIsInRhYmxlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwidHIiLCJpIiwiJHNlY29uZF9jZWxsIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJ0aGlyZENlbGwiLCJmbGVldENvdW50Iiwib3V0ZXJIVE1MIiwiZnJvbSIsImlubmVySFRNTCIsInRvIiwibm9kZU5hbWUiLCJtaXNzaW9uIiwibGFzdENoaWxkIiwibm9kZVZhbHVlIiwibGFzdFRpbWUiLCJmaXJzdENoaWxkIiwieCIsIm5leHRSb3ciLCJuZXh0Um93RmxlZXRDb3VudCIsIm5leHRSb3dGcm9tIiwibmV4dFJvd1RvIiwibmV4dFJvd01pc3Npb24iLCJuZXh0Um93VGltZXN0YW1wIiwiYXR0cmlidXRlcyIsImFsdCIsInZhbHVlIiwic2V0U2Vjb25kcyIsImNoaWxkRWxlbWVudENvdW50IiwidXBkYXRlUmV0dXJuRmxlZXRzVGltZSIsInJfZmxlZXRzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInNldEludGVydmFsIiwicmV0dXJuVGltZSIsInRoIiwicXVlcnlTZWxlY3RvciIsInNlcnZlclRpbWUiLCJ1cGRhdGVQbGFuZXJhcnlTZXJ2ZXJUaW1lIiwiZm9yRWFjaCIsIiR0aCIsInRlc3QiLCJ0ZXh0Q29udGVudCIsIiR0ciIsInBhcmVudEVsZW1lbnQiLCJIVE1MVGFibGVSb3dFbGVtZW50IiwiJGEiLCJ0cyIsImdldEF0dHJpYnV0ZSIsImNvbnNvbGUiLCJsb2ciLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJ0b0xvY2FsZVRpbWVTdHJpbmciXSwibWFwcGluZ3MiOiJhQUFBLENBQ0MsTUFBTUEsRUFBZ0NDLElBQy9CLElBQUlDLEVBQWVELEVBQUlFLE1BQU0sS0FDekJDLEVBQWUsRUFFbkIsSUFBSyxJQUFJQyxFQUFJLEVBQUdBLEVBQUlILEVBQU9JLE9BQVFELElBQUssQ0FDdkMsTUFBTUUsRUFBV0wsRUFBT0csR0FBR0csT0FBTyxHQUM1QkMsRUFBV0MsU0FBU1IsRUFBT0csR0FBR00sUUFBUSxXQUFZLE9BRXZDLE1BQWJKLElBQWtCSCxHQUF1QixHQUFQSyxFQUFZLEdBQUssSUFDdEMsTUFBYkYsSUFBa0JILEdBQXVCLEdBQVBLLEVBQVksSUFDakMsTUFBYkYsSUFBa0JILEdBQXVCLEdBQVBLLEdBQ3JCLE1BQWJGLElBQWtCSCxHQUFnQkssR0FHdkMsT0FBT0wsR0FFUlEsRUFBZ0NDLEdBQWUsSUFBSUMsS0FBS0QsRUFBS0UsVUFBdUMsSUFBM0JGLEVBQUtHLHFCQUE2QkMsY0FBY04sUUFBUSxJQUFLLEtBQUtPLFVBQVUsRUFBRyxJQUN4SkMsRUFBZ0NDLElBQy9CLE1BQU1DLEVBQU8sSUFBSVAsS0FBaUIsSUFBWk0sR0FDdEIsT0FBT1IsRUFBWSxJQUFJRSxLQUN0Qk8sRUFBS0MsY0FDTEQsRUFBS0UsV0FDTEYsRUFBS0csVUFDTEgsRUFBS0ksV0FDTEosRUFBS0ssYUFDTEwsRUFBS00sZ0JBV0pDLEVBQTRCLEtBQzlCLE1BQU1DLEVBQVFDLFNBQVNDLGlCQUE4QixzQkFBc0IsR0FDM0UsR0FBS0YsR0FFREEsRUFBTUUsaUJBQThCLE1BQU16QixPQUFT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QTFCRCxFQUFHRSxhQUFhLE9BQ3hCMUQsRUFBTyxJQUFJUCxLQUFnQyxLQUExQitELEVBQUdFLGFBQWEsUUFFdkNDLFFBQVFDLElBQUlILEVBQUlELEVBQUdKLFlBQWFwRCxFQUFLNkQscUJBQXNCN0QsRUFBSzhEIiwiZmlsZSI6ImV4dGVuc2lvbi9wYWdlL29wdGlvbi9vdmVydmlldy9vdmVydmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIntcblx0Y29uc3QgZ2V0X3NlY29uZHNfZnJvbV9yYXcgICAgICAgICA9IChyYXc6IHN0cmluZykgPT4ge1xuXHRcdCAgICAgIGxldCByYXdBcnIgICAgICAgPSByYXcuc3BsaXQoYCBgKSxcblx0XHQgICAgICAgICAgdG90YWxTZWNvbmRzID0gMDtcblxuXHRcdCAgICAgIGZvciAobGV0IHogPSAwOyB6IDwgcmF3QXJyLmxlbmd0aDsgeisrKSB7XG5cdFx0XHQgICAgICBjb25zdCB1bml0VGltZSA9IHJhd0Fyclt6XS5zbGljZSgtMSksXG5cdFx0XHQgICAgICAgICAgICB1bml0ICAgICA9IHBhcnNlSW50KHJhd0Fyclt6XS5yZXBsYWNlKC8oXFxkKylcXHcvZywgJyQxJykpO1xuXG5cdFx0XHQgICAgICBpZiAodW5pdFRpbWUgPT09ICdkJykgdG90YWxTZWNvbmRzICs9IHVuaXQgKiA2MCAqIDYwICogMjQ7XG5cdFx0XHQgICAgICBpZiAodW5pdFRpbWUgPT09ICdoJykgdG90YWxTZWNvbmRzICs9IHVuaXQgKiA2MCAqIDYwO1xuXHRcdFx0ICAgICAgaWYgKHVuaXRUaW1lID09PSAnbScpIHRvdGFsU2Vjb25kcyArPSB1bml0ICogNjA7XG5cdFx0XHQgICAgICBpZiAodW5pdFRpbWUgPT09ICdzJykgdG90YWxTZWNvbmRzICs9IHVuaXQ7XG5cdFx0ICAgICAgfVxuXG5cdFx0ICAgICAgcmV0dXJuIHRvdGFsU2Vjb25kcztcblx0ICAgICAgfSxcblx0ICAgICAgZGF0ZV9mb3JtYXQgICAgICAgICAgICAgICAgICA9ICh0aW1lOiBEYXRlKSA9PiBuZXcgRGF0ZSh0aW1lLmdldFRpbWUoKSAtIHRpbWUuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwMDAwKS50b0lTT1N0cmluZygpLnJlcGxhY2UoJ1QnLCAnICcpLnN1YnN0cmluZygwLCAxOSksXG5cdCAgICAgIGdldEh1bWFuVGltZXN0YW1wICAgICAgICAgICAgPSAodGltZXN0YW1wOiBudW1iZXIpID0+IHtcblx0XHQgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodGltZXN0YW1wICogMTAwMCk7XG5cdFx0ICAgICAgcmV0dXJuIGRhdGVfZm9ybWF0KG5ldyBEYXRlKFxuXHRcdFx0ICAgICAgZGF0ZS5nZXRGdWxsWWVhcigpLFxuXHRcdFx0ICAgICAgZGF0ZS5nZXRNb250aCgpLFxuXHRcdFx0ICAgICAgZGF0ZS5nZXREYXRlKCksXG5cdFx0XHQgICAgICBkYXRlLmdldEhvdXJzKCksXG5cdFx0XHQgICAgICBkYXRlLmdldE1pbnV0ZXMoKSxcblx0XHRcdCAgICAgIGRhdGUuZ2V0U2Vjb25kcygpXG5cdFx0ICAgICAgKSk7XG5cdCAgICAgIH0sIHVwZGF0ZVBsYW5lcmFyeVNlcnZlclRpbWUgPSAoKSA9PiB7XG5cblx0XHQgICAgICBjb25zdCB0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTFRhYmxlSGVhZGVyQ2VsbEVsZW1lbnQ+KCd0aFtjb2xzcGFuPVwiM1wiXScpO1xuXHRcdCAgICAgIGlmICh0aCA9PT0gbnVsbCkgcmV0dXJuO1xuXHRcdCAgICAgIGNvbnN0IHNlcnZlclRpbWUgPSBuZXcgRGF0ZSh0aC5pbm5lckhUTUwpO1xuXHRcdCAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcblx0XHRcdCAgICAgIHNlcnZlclRpbWUuc2V0U2Vjb25kcyhzZXJ2ZXJUaW1lLmdldFNlY29uZHMoKSArIDEpO1xuXHRcdFx0ICAgICAgdGguaW5uZXJIVE1MID0gZGF0ZV9mb3JtYXQoc2VydmVyVGltZSk7XG5cdFx0ICAgICAgfSwgMTAwMCk7XG5cdCAgICAgIH0sIHJldHVybkZsZWV0VGltZXIgICAgICAgICAgPSAoKSA9PiB7XG5cdFx0ICAgICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PigndGFibGVbd2lkdGg9XCI1MzBcIl0nKVsxXTtcblx0XHQgICAgICBpZiAoIXRhYmxlKSByZXR1cm47XG5cblx0XHQgICAgICBpZiAodGFibGUucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oJ3RyJykubGVuZ3RoID4gMSkge1xuXHRcdFx0ICAgICAgY29uc3QgdHIgPSB0YWJsZS5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PigndHI6bm90KDpmaXJzdC1jaGlsZCknKTtcblxuXHRcdFx0ICAgICAgLy/Qn9C10YDQtdCx0L7RgCDRgdGC0YDQvtC6XG5cdFx0XHQgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRyLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdCAgICAgIC8vIEB0cy1pZ25vcmVcblx0XHRcdFx0ICAgICAgY29uc3QgJHNlY29uZF9jZWxsID0gdHJbaV0uZmlyc3RFbGVtZW50Q2hpbGQubmV4dEVsZW1lbnRTaWJsaW5nLCAvL9CS0YLQvtGA0LDRjyDRj9GH0LXQudC60LAg0YLQsNCx0LvQuNGG0YsgKNCz0LTQtSDRgdGC0YDQtdC70LrQuCDQstC+0LfQstGA0LDRgtCwKVxuXHRcdFx0XHQgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG5cdFx0XHRcdCAgICAgICAgICAgIHRoaXJkQ2VsbCAgICA9ICRzZWNvbmRfY2VsbC5uZXh0RWxlbWVudFNpYmxpbmcsIC8vMyDRj9GH0LXQudC60LAg0YEg0LTQsNC90L3Ri9C80Lgg0L4g0L/QvtC70LXRgtC1XG5cdFx0XHRcdCAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcblx0XHRcdFx0ICAgICAgICAgICAgZmxlZXRDb3VudCAgID0gdGhpcmRDZWxsLmZpcnN0RWxlbWVudENoaWxkLm91dGVySFRNTCwgLy/QmtC+0Lst0LLQviDRhNC70L7RgtCwLlxuXHRcdFx0XHQgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG5cdFx0XHRcdCAgICAgICAgICAgIGZyb20gICAgICAgICA9IHRoaXJkQ2VsbC5maXJzdEVsZW1lbnRDaGlsZC5uZXh0RWxlbWVudFNpYmxpbmcuaW5uZXJIVE1MOyAvL9C+0YLQutGD0LTQsC5cblx0XHRcdFx0ICAgICAgLy8gQHRzLWlnbm9yZVxuXHRcdFx0XHQgICAgICBpZiAoIXRoaXJkQ2VsbC5maXJzdEVsZW1lbnRDaGlsZC5uZXh0RWxlbWVudFNpYmxpbmcubmV4dEVsZW1lbnRTaWJsaW5nKSBjb250aW51ZTtcblx0XHRcdFx0ICAgICAgLy8gQHRzLWlnbm9yZVxuXHRcdFx0XHQgICAgICBjb25zdCB0byAgICAgICA9ICh0aGlyZENlbGwuZmlyc3RFbGVtZW50Q2hpbGQubmV4dEVsZW1lbnRTaWJsaW5nLm5leHRFbGVtZW50U2libGluZy5ub2RlTmFtZSA9PT0gJ0lNRycpIC8v0JrRg9C00LBcblx0XHRcdFx0XHQgICAgICAvLyBAdHMtaWdub3JlXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlyZENlbGwuZmlyc3RFbGVtZW50Q2hpbGQubmV4dEVsZW1lbnRTaWJsaW5nLm5leHRFbGVtZW50U2libGluZy5uZXh0RWxlbWVudFNpYmxpbmcuaW5uZXJIVE1MIC8v0JXRgdC70Lgg0YTQu9C+0YIg0YPQttC1INCy0L7Qt9Cy0YDQsNGJ0LDQtdGC0YHRj1xuXHRcdFx0XHRcdCAgICAgIC8vIEB0cy1pZ25vcmVcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXJkQ2VsbC5maXJzdEVsZW1lbnRDaGlsZC5uZXh0RWxlbWVudFNpYmxpbmcubmV4dEVsZW1lbnRTaWJsaW5nLmlubmVySFRNTCwgLy/QldGB0LvQuCDRhNC70L7RgiDQtdGJ0ZEg0L3QtSDQstC+0LfQstGA0LDRidCw0LXRgtGB0Y9cblx0XHRcdFx0ICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuXHRcdFx0XHQgICAgICAgICAgICBtaXNzaW9uICA9ICh0aGlyZENlbGwubGFzdENoaWxkLm5vZGVWYWx1ZSAhPT0gbnVsbCkgPyB0aGlyZENlbGwubGFzdENoaWxkLm5vZGVWYWx1ZS5zcGxpdChcIjpcIilbMV0gOiB0aGlyZENlbGwubGFzdENoaWxkLm91dGVySFRNTCwgLy/QnNC40YHRgdC40Y9cblx0XHRcdFx0ICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuXHRcdFx0XHQgICAgICAgICAgICBsYXN0VGltZSA9IGdldF9zZWNvbmRzX2Zyb21fcmF3KHRyW2ldLmZpcnN0Q2hpbGQhLmZpcnN0RWxlbWVudENoaWxkIS5pbm5lckhUTUwpOyAvLyDQntGB0YLQsNCy0YjQtdC10YHRjyDQstGA0LXQvNGPXG5cblx0XHRcdFx0ICAgICAgZm9yIChsZXQgeCA9IGkgKyAxOyB4IDwgdHIubGVuZ3RoOyB4KyspIHtcblx0XHRcdFx0XHQgICAgICAvLyBAdHMtaWdub3JlXG5cdFx0XHRcdFx0ICAgICAgY29uc3QgbmV4dFJvdyAgICAgICAgICAgPSB0clt4XS5maXJzdEVsZW1lbnRDaGlsZCEubmV4dEVsZW1lbnRTaWJsaW5nIS5uZXh0RWxlbWVudFNpYmxpbmcsXG5cdFx0XHRcdFx0ICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuXHRcdFx0XHRcdCAgICAgICAgICAgIG5leHRSb3dGbGVldENvdW50ID0gbmV4dFJvdy5maXJzdEVsZW1lbnRDaGlsZC5vdXRlckhUTUwsXG5cdFx0XHRcdFx0ICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuXHRcdFx0XHRcdCAgICAgICAgICAgIG5leHRSb3dGcm9tICAgICAgID0gbmV4dFJvdy5maXJzdEVsZW1lbnRDaGlsZC5uZXh0RWxlbWVudFNpYmxpbmcuaW5uZXJIVE1MLFxuXHRcdFx0XHRcdCAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcblx0XHRcdFx0XHQgICAgICAgICAgICBuZXh0Um93VG8gICAgICAgICA9IChuZXh0Um93LmZpcnN0RWxlbWVudENoaWxkLm5leHRFbGVtZW50U2libGluZy5uZXh0RWxlbWVudFNpYmxpbmcubm9kZU5hbWUgPT09ICdJTUcnKVxuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBuZXh0Um93LmZpcnN0RWxlbWVudENoaWxkLm5leHRFbGVtZW50U2libGluZy5uZXh0RWxlbWVudFNpYmxpbmcubmV4dEVsZW1lbnRTaWJsaW5nLmlubmVySFRNTFxuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBuZXh0Um93LmZpcnN0RWxlbWVudENoaWxkLm5leHRFbGVtZW50U2libGluZy5uZXh0RWxlbWVudFNpYmxpbmcuaW5uZXJIVE1MLFxuXHRcdFx0XHRcdCAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcblx0XHRcdFx0XHQgICAgICAgICAgICBuZXh0Um93TWlzc2lvbiAgICA9IChuZXh0Um93Lmxhc3RDaGlsZC5ub2RlVmFsdWUgIT0gbnVsbClcblx0XHRcdFx0XHRcdCAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gbmV4dFJvdy5sYXN0Q2hpbGQubm9kZVZhbHVlLnNwbGl0KFwiOlwiKVsxXVxuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBuZXh0Um93Lmxhc3RDaGlsZC5vdXRlckhUTUw7XG5cblx0XHRcdFx0XHQgICAgICBpZiAobmV4dFJvd0ZsZWV0Q291bnQgPT09IGZsZWV0Q291bnQgJiYgbmV4dFJvd0Zyb20gPT09IHRvICYmIG5leHRSb3dUbyA9PT0gZnJvbSAmJiBuZXh0Um93TWlzc2lvbiA9PT0gbWlzc2lvbikge1xuXHRcdFx0XHRcdFx0ICAgICAgLy8gQHRzLWlnbm9yZVxuXHRcdFx0XHRcdFx0ICAgICAgY29uc3QgbmV4dFJvd1RpbWVzdGFtcCA9IHBhcnNlSW50KHRyW3hdLmZpcnN0Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuYXR0cmlidXRlcy5hbHQudmFsdWUpLFxuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgZGF0ZSAgICAgICAgICAgICA9IG5ldyBEYXRlKGdldEh1bWFuVGltZXN0YW1wKG5leHRSb3dUaW1lc3RhbXApKTtcblxuXHRcdFx0XHRcdFx0ICAgICAgZGF0ZS5zZXRTZWNvbmRzKGRhdGUuZ2V0U2Vjb25kcygpIC0gKGxhc3RUaW1lICogMikpO1xuXG5cdFx0XHRcdFx0XHQgICAgICAvLyBAdHMtaWdub3JlXG5cdFx0XHRcdFx0XHQgICAgICBpZiAodHJbaV0uZmlyc3RDaGlsZC5uZXh0RWxlbWVudFNpYmxpbmcuY2hpbGRFbGVtZW50Q291bnQgPT09IDEpIHtcblx0XHRcdFx0XHRcdFx0ICAgICAgLy8gQHRzLWlnbm9yZVxuXHRcdFx0XHRcdFx0XHQgICAgICAkc2Vjb25kX2NlbGwuaW5uZXJIVE1MICs9IGA8ZGl2IGNsYXNzPVwicmV0dXJuX3RpbWVcIiBzdHlsZT1cIm1pbi13aWR0aDogNzVweDtcIj4ke2RhdGVfZm9ybWF0KGRhdGUpfTwvZGl2PmA7IC8v0LLRgNC10LzRjyDQv9GA0Lgg0LLQvtC30LLRgNCw0YLQtVxuXHRcdFx0XHRcdFx0ICAgICAgfVxuXG5cdFx0XHRcdFx0XHQgICAgICBicmVhaztcblx0XHRcdFx0XHQgICAgICB9XG5cdFx0XHRcdCAgICAgIH1cblx0XHRcdCAgICAgIH1cblx0XHRcdCAgICAgIHVwZGF0ZVJldHVybkZsZWV0c1RpbWUoKTtcblx0XHQgICAgICB9XG5cblx0ICAgICAgfSwgdXBkYXRlUmV0dXJuRmxlZXRzVGltZSAgICA9ICgpID0+IHtcblx0XHQgICAgICBjb25zdCByX2ZsZWV0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3JldHVybl90aW1lJyk7XG5cblx0XHQgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0XHQgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJfZmxlZXRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdCAgICAgIGNvbnN0IHJldHVyblRpbWUgPSBuZXcgRGF0ZShyX2ZsZWV0c1tpXS5pbm5lckhUTUwpO1xuXHRcdFx0XHQgICAgICByZXR1cm5UaW1lLnNldFNlY29uZHMocmV0dXJuVGltZS5nZXRTZWNvbmRzKCkgKyAyKTtcblx0XHRcdFx0ICAgICAgcl9mbGVldHNbaV0uaW5uZXJIVE1MID0gZGF0ZV9mb3JtYXQocmV0dXJuVGltZSk7XG5cdFx0XHQgICAgICB9XG5cdFx0ICAgICAgfSwgMTAwMCk7XG5cdCAgICAgIH07XG5cblx0dXBkYXRlUGxhbmVyYXJ5U2VydmVyVGltZSgpO1xuXHRyZXR1cm5GbGVldFRpbWVyKCk7XG5cblx0Ly88ZWRpdG9yLWZvbGQgZGVzYz1cImNoZWNrIGF0dGFja1wiPlxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxUYWJsZUhlYWRlckNlbGxFbGVtZW50PihgdGhbd2lkdGg9JzM2MCddYCkuZm9yRWFjaCgkdGggPT4ge1xuXHRcdGlmICghL9GBXFxzK9C80LjRgdGB0LjQtdC5OlxccyvQkNGC0LDQutC+0LLQsNGC0YwvLnRlc3QoJHRoLnRleHRDb250ZW50ISkpIHJldHVybjtcblx0XHRjb25zdCAkdHIgPSAkdGgucGFyZW50RWxlbWVudDtcblx0XHRpZiAoISgkdHIgaW5zdGFuY2VvZiBIVE1MVGFibGVSb3dFbGVtZW50KSkgcmV0dXJuO1xuXHRcdGNvbnN0ICRhICAgPSAkdHIucXVlcnlTZWxlY3RvcjxIVE1MTGlua0VsZW1lbnQ+KGA6c2NvcGUgPiB0aDpudGgtY2hpbGQoMSkgYVtpZF1gKSEsXG5cdFx0ICAgICAgdHMgICA9ICskYS5nZXRBdHRyaWJ1dGUoYGFsdGApISAqIDEwMDAsXG5cdFx0ICAgICAgZGF0ZSA9IG5ldyBEYXRlKCskYS5nZXRBdHRyaWJ1dGUoYGFsdGApISAqIDEwMDApO1xuXG5cdFx0Y29uc29sZS5sb2codHMsICRhLnRleHRDb250ZW50LCBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygpLCBkYXRlLnRvTG9jYWxlVGltZVN0cmluZygpKTtcblx0fSk7XG5cdC8vPC9lZGl0b3ItZm9sZD5cbn0iXX0=