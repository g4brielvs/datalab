import { initBarGraph, initChart } from './init';


let debounce;

initBarGraph();

window.addEventListener('resize', function () {
    if (debounce) {
        clearTimeout(debounce);
    }

    debounce = setTimeout(initChart, 100);
});
