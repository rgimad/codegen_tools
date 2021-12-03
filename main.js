function convert_to_string() {
    let s_txt = document.getElementById('s-txt').value;
    let pref = document.getElementById('pref').value;
    s_txt = s_txt.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g,''); // delete // and /**/ comments
    let s_txt_split = s_txt.split(/ |,|\n|\t/).filter(i => i); // split and delete smpty elements after split
    console.log(s_txt_split);
    let d_txt = 'const char *A[] = {\n';
    for (let x of s_txt_split) {
        d_txt = d_txt + '    \"' + pref+x + '\",\n';
    }
    d_txt = d_txt.slice(0, -2);
    d_txt += '\n};';
    document.getElementById('d-txt').value = d_txt;
}

function convert_to_switch() {
    let s_txt = document.getElementById('s-txt').value;
    let pref = document.getElementById('pref').value;
    s_txt = s_txt.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g,''); // delete // and /**/ comments
    let s_txt_split = s_txt.split(/ |,|\n|\t/).filter(i => i); // split and delete smpty elements after split
    console.log(s_txt_split);
    let d_txt = 'const char* ENUM_to_string(int enum_value) {\n';
    d_txt += '    switch (enum_value) {\n';
    for (let x of s_txt_split) {
        d_txt = d_txt + '    case ' + pref+x + ':\n        return \"' + pref+x + '\";\n\n';
    }
    d_txt = d_txt + '    default:\n    return \"_UNKNOWN_\";\n';
    // dstText = dstText.slice(0, -1);
    d_txt += '    };\n}';
    document.getElementById('d-txt').value = d_txt;
}
