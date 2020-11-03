let dark = document.getElementById('switch'),
    root = document.documentElement.style;
	
dark.addEventListener('click', toggle);

function toggle(){
	
    root.setProperty('--bg-color', 'var(--dark-bg-color)');
	root.setProperty('--top-bg-pattern', 'var(--dark-bg-pattern)');
	root.setProperty('--card-bg', 'var(--dark-card-bg)');
	root.setProperty('--card-hover', 'var(--dark-card-hover)');
	root.setProperty('--headings', 'var(--dark-headings)');
	root.setProperty('--sub-headings', 'var(--dark-sub-headings)');
	root.setProperty('--toggle', 'var(--dark-toggle)');
	root.setProperty('--toggle-text', 'var(--dark-toggle-text)');
	root.setProperty('--card-heading', 'var(--dark-card-heading)');
	
	dark.style.padding = "1.3px 4px 1px 20px";
	
	dark.addEventListener('click', function(){
		location.href="index.html";
	});
}



