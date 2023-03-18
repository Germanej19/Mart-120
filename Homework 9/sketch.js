function setup()
{
    createCanvas(500 , 600);
}

function draw()
{
    background(50,220,200);
    // head
    strokeWeight(4);
    stroke(51);
    fill(206,175,135);
    ellipse(250,250,200,[350]);

    // eyes
    fill(255);
    ellipse(175, 210, 95, 50);
    fill(100);
    circle(155, 220, 35);

    fill(255);
    ellipse(295, 210, 95, 50);
    fill(100);
    circle(275, 220, 35);

    // cheeks
    square(155, 295, 50);
    square(155, 295, 40);
    square(155, 295, 30);
    square(155, 295, 20);
    square(155, 295, 10);

    square(275, 295, 50);
    square(275, 295, 40);
    square(275, 295, 30);
    square(275, 295, 20);
    square(275, 295, 10);

    // nose
    line(240,210,200,275)
    line(200,275,240,275)

    // mouth
    fill(250)
    triangle(200,360,240,410,280,360)

    // text
    text("Self Portarit", 210,20)
    text("Jake Germane" , 210,580)


}