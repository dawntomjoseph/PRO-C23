const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,50);
 
   log1 = new Log(500,400,450)
   log2 = new Log(522,400,450)
   log3 = new Log(544,400,450)
   log4 = new Log(566,400,450)
   log5 = new Log(588,400,450)
   log6 = new Log(610,400,450)
   log7 = new Log(633,400,450)
   log8 = new Log(655,400,450)
   log9 = new Log(677,400,450)
   log10 = new Log(699,400,450)
   log11 = new Log(720,400,450)
   log12 = new Log(744,400,450)
   log13 = new Log(766,400,450)
   log14 = new Log(788,400,450)
   log15 = new Log(830,400,450)
   log16 = new Log(852,400,450)
   log17 = new Log(864,400,450)
   log18 = new Log(886,400,450)
   log19 = new Log(930,400,450)
   log20 = new Log(952,400,450)
   log21 = new Log(810,400,450)
   log22 = new Log(905,400,450)
   log23 = new Log(495,164,950,PI/2)
   log24 = new Log(478,400,450)
   log25 = new Log(456,400,450)
   log26 = new Log(434,400,450)
   log27 = new Log(410,400,450)
   log28 = new Log(388,400,450)
   log29 = new Log(366,400,450)
   log30 = new Log(344,400,450)
   log31 = new Log(322,400,450)
   log32 = new Log(300,400,450)
   log33 = new Log(278,400,450)
   log34 = new Log(256,400,450)
   log35 = new Log(234,400,450)
   log36 = new Log(212,400,450)
   log37 = new Log(190,400,450)
   log38 = new Log(168,400,450)
   log39 = new Log(146,400,450)
   log40 = new Log(124,400,450)
   log41 = new Log(102,400,450)
   log42 = new Log(80,400,450)
   log43 = new Log(58,400,450)
   log44 = new Log(36,400,450)
   log45 = new Log(36,120,100)
   log46 = new Log(58,120,100)
   log47 = new Log(80,120,100)
   log48 = new Log(102,120,100)
   log49 = new Log(124,120,100)
   log50 = new Log(78,60,115,PI/2)
   log51 = new Log(456,120,100)
   log52 = new Log(478,120,100)
   log53 = new Log(500,120,100)
   log54 = new Log(522,120,100)
   log55 = new Log(492,65,95,PI/2)
   log56 = new Log(886,120,100)
   log57 = new Log(930,120,100)
   log58 = new Log(908,120,100)
   log59 = new Log(953,120,100)
   log60 = new Log(920,70,100,PI/2)
  }


function draw(){
 
 background("white")
    
   
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    log5.display();
    log6.display();
    log7.display();
    log8.display();
    log9.display();
    log10.display();
    log11.display();
    log12.display();
    log13.display();
    log14.display();
    log15.display();
    log16.display();
    log17.display();
    log18.display();
    log19.display();
    log20.display();
    log21.display();
    log22.display();
    log23.display();
    log24.display();
    log25.display();
    log26.display();
    log27.display();
    log28.display();
    log29.display();
    log30.display();
    log31.display();
    log32.display();
    log33.display();
    log34.display();
    log35.display();
    log36.display();
    log37.display();   
    log38.display();
    log39.display();
    log40.display();
    log41.display();
    log42.display();
    log43.display();
    log44.display();
    log45.display();
    log46.display();
    log47.display();
    log48.display();
    log49.display();
    log50.display();
    log51.display();
    log52.display();
    log53.display();
    log54.display();
    log55.display();
    log56.display();
    log57.display();
    log58.display();
    log59.display();
    log60.display();
  }


