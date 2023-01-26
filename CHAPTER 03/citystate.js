function show() {
    with(document.forms.f1)
    {
        if(b1.value=="STATE")
        {
            b1.value="CITY";
            op[0].text="Maharashtra";
            op[1].text="Andhra";
        }
        if(b1.value=="CITY")
        {
            b1.value="STATE";
            op[0].text="Pune";
            op[1].text="Vijayvada";
        }
    }
}