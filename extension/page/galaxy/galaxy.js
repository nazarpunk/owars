"use strict";(()=>{const t=document.querySelector("table[width='570']");if(!t)return;const e=t.querySelector("td.c[colspan='7']");if(!e)return;const n=e.textContent.match(/(\d+):(\d+)/);if(!n||3!==n.length)return;const[,o,r]=n,l=[];t.querySelectorAll("tr").forEach(t=>{if(7!==t.children.length)return;const e=t.children,n=e[0].querySelector("a");if(!n)return;const c=[];e[3].querySelectorAll("img").forEach(t=>c.push(t.alt));let s={x:o,y:r,z:n.textContent,planet_name:e[2].textContent.replace("*",""),planet_space:c.join(", "),player:e[4].textContent,aliance:e[5].textContent};l.push(s)}),fetch("http://gorsaldo.online/owars/save.php",{method:"post",body:JSON.stringify(l)}).then(t=>t.json()).then(t=>{console.log(t)}),console.log(l)})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVuc2lvbi9wYWdlL2dhbGF4eS9nYWxheHkudHMiXSwibmFtZXMiOlsiJHRhYmxlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiJGhlYWQiLCJtYXRjaCIsInRleHRDb250ZW50IiwibGVuZ3RoIiwieCIsInkiLCJkYXRhIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCIkdHIiLCJjaGlsZHJlbiIsIiR0ZCIsIiR6IiwicGxhbmV0X3NwYWNlIiwiJGltZyIsInB1c2giLCJhbHQiLCJvYmoiLCJ6IiwicGxhbmV0X25hbWUiLCJyZXBsYWNlIiwiam9pbiIsInBsYXllciIsImFsaWFuY2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInIiLCJqc29uIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6ImFBQUEsTUFDQyxNQUFNQSxFQUFTQyxTQUFTQyxjQUFjLHNCQUN0QyxJQUFLRixFQUFRLE9BRWIsTUFBTUcsRUFBUUgsRUFBT0UsY0FBYyxxQkFDbkMsSUFBS0MsRUFBTyxPQUVaLE1BQU1DLEVBQVFELEVBQU1FLFlBQWFELE1BQU0sZUFDdkMsSUFBS0EsR0FBMEIsSUFBakJBLEVBQU1FLE9BQWMsT0FFbEMsTUFBTyxDQUFFQyxFQUFHQyxHQUFPSixFQUNiSyxFQUFhLEdBR25CVCxFQUFPVSxpQkFBc0MsTUFBTUMsUUFBUUMsSUFDMUQsR0FBNEIsSUFBeEJBLEVBQUlDLFNBQVNQLE9BQWMsT0FDL0IsTUFBTVEsRUFBTUYsRUFBSUMsU0FFVkUsRUFBS0QsRUFBSSxHQUFHWixjQUFjLEtBQ2hDLElBQUthLEVBQUksT0FFVCxNQUFNQyxFQUF5QixHQUMvQkYsRUFBSSxHQUFHSixpQkFBaUIsT0FBT0MsUUFBUU0sR0FBUUQsRUFBYUUsS0FBS0QsRUFBS0UsTUFFdEUsSUFBSUMsRUFBTSxDQUNUYixFQUFjQSxFQUNkQyxFQUFjQSxFQUNkYSxFQUFjTixFQUFHVixZQUNqQmlCLFlBQWNSLEVBQUksR0FBR1QsWUFBYWtCLFFBQVEsSUFBSyxJQUMvQ1AsYUFBY0EsRUFBYVEsS0FBSyxNQUNoQ0MsT0FBY1gsRUFBSSxHQUFHVCxZQUNyQnFCLFFBQWNaLEVBQUksR0FBR1QsYUFHdEJJLEVBQUtTLEtBQUtFLEtBSVhPLE1BQU0sd0NBQXlDLENBQzlDQyxPQUFRLE9BQ1JDLEtBQVFDLEtBQUtDLFVBQVV0QixLQUV0QnVCLEtBQUtDLEdBQUtBLEVBQUVDLFFBQ1pGLEtBQUt2QixJQUNMMEIsUUFBUUMsSUFBSTNCLEtBR2QwQixRQUFRQyxJQUFJM0IsSUEvQ2IiLCJmaWxlIjoiZXh0ZW5zaW9uL3BhZ2UvZ2FsYXh5L2dhbGF4eS5qcyIsInNvdXJjZXNDb250ZW50IjpbIigoKSA9PiB7XG5cdGNvbnN0ICR0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHRhYmxlW3dpZHRoPSc1NzAnXWApO1xuXHRpZiAoISR0YWJsZSkgcmV0dXJuO1xuXG5cdGNvbnN0ICRoZWFkID0gJHRhYmxlLnF1ZXJ5U2VsZWN0b3IoYHRkLmNbY29sc3Bhbj0nNyddYCk7XG5cdGlmICghJGhlYWQpIHJldHVybjtcblxuXHRjb25zdCBtYXRjaCA9ICRoZWFkLnRleHRDb250ZW50IS5tYXRjaCgvKFxcZCspOihcXGQrKS8pO1xuXHRpZiAoIW1hdGNoIHx8IG1hdGNoLmxlbmd0aCAhPT0gMykgcmV0dXJuO1xuXG5cdGNvbnN0IFssIHgsIHldICAgPSBtYXRjaCxcblx0ICAgICAgZGF0YToge31bXSA9IFtdO1xuXG5cblx0JHRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTFRhYmxlUm93RWxlbWVudD4oYHRyYCkuZm9yRWFjaCgkdHIgPT4ge1xuXHRcdGlmICgkdHIuY2hpbGRyZW4ubGVuZ3RoICE9PSA3KSByZXR1cm47XG5cdFx0Y29uc3QgJHRkID0gJHRyLmNoaWxkcmVuO1xuXG5cdFx0Y29uc3QgJHogPSAkdGRbMF0ucXVlcnlTZWxlY3RvcihgYWApO1xuXHRcdGlmICghJHopIHJldHVybjtcblxuXHRcdGNvbnN0IHBsYW5ldF9zcGFjZTogc3RyaW5nW10gPSBbXTtcblx0XHQkdGRbM10ucXVlcnlTZWxlY3RvckFsbChgaW1nYCkuZm9yRWFjaCgkaW1nID0+IHBsYW5ldF9zcGFjZS5wdXNoKCRpbWcuYWx0KSk7XG5cblx0XHRsZXQgb2JqID0ge1xuXHRcdFx0eCAgICAgICAgICAgOiB4LFxuXHRcdFx0eSAgICAgICAgICAgOiB5LFxuXHRcdFx0eiAgICAgICAgICAgOiAkei50ZXh0Q29udGVudCxcblx0XHRcdHBsYW5ldF9uYW1lIDogJHRkWzJdLnRleHRDb250ZW50IS5yZXBsYWNlKGAqYCwgYGApLFxuXHRcdFx0cGxhbmV0X3NwYWNlOiBwbGFuZXRfc3BhY2Uuam9pbihgLCBgKSxcblx0XHRcdHBsYXllciAgICAgIDogJHRkWzRdLnRleHRDb250ZW50ISxcblx0XHRcdGFsaWFuY2UgICAgIDogJHRkWzVdLnRleHRDb250ZW50IVxuXHRcdH07XG5cblx0XHRkYXRhLnB1c2gob2JqKTtcblx0fSk7XG5cblxuXHRmZXRjaChgaHR0cDovL2dvcnNhbGRvLm9ubGluZS9vd2Fycy9zYXZlLnBocGAsIHtcblx0XHRtZXRob2Q6IGBwb3N0YCxcblx0XHRib2R5ICA6IEpTT04uc3RyaW5naWZ5KGRhdGEpXG5cdH0pXG5cdFx0LnRoZW4ociA9PiByLmpzb24oKSlcblx0XHQudGhlbihkYXRhID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKGRhdGEpO1xuXHRcdH0pXG5cblx0Y29uc29sZS5sb2coZGF0YSk7XG59KSgpO1xuXG4iXX0=