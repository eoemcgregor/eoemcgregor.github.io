gdjs.NewSceneCode = {};
gdjs.NewSceneCode.GDPlayerObjects1= [];
gdjs.NewSceneCode.GDPlayerObjects2= [];
gdjs.NewSceneCode.GDPlayerObjects3= [];
gdjs.NewSceneCode.GDbackgroundObjects1= [];
gdjs.NewSceneCode.GDbackgroundObjects2= [];
gdjs.NewSceneCode.GDbackgroundObjects3= [];
gdjs.NewSceneCode.GDbackground1Objects1= [];
gdjs.NewSceneCode.GDbackground1Objects2= [];
gdjs.NewSceneCode.GDbackground1Objects3= [];
gdjs.NewSceneCode.GDbackground2Objects1= [];
gdjs.NewSceneCode.GDbackground2Objects2= [];
gdjs.NewSceneCode.GDbackground2Objects3= [];
gdjs.NewSceneCode.GDbackground3Objects1= [];
gdjs.NewSceneCode.GDbackground3Objects2= [];
gdjs.NewSceneCode.GDbackground3Objects3= [];
gdjs.NewSceneCode.GDbackground4Objects1= [];
gdjs.NewSceneCode.GDbackground4Objects2= [];
gdjs.NewSceneCode.GDbackground4Objects3= [];
gdjs.NewSceneCode.GDbackground5Objects1= [];
gdjs.NewSceneCode.GDbackground5Objects2= [];
gdjs.NewSceneCode.GDbackground5Objects3= [];
gdjs.NewSceneCode.GDbackground6Objects1= [];
gdjs.NewSceneCode.GDbackground6Objects2= [];
gdjs.NewSceneCode.GDbackground6Objects3= [];
gdjs.NewSceneCode.GDFloorObjects1= [];
gdjs.NewSceneCode.GDFloorObjects2= [];
gdjs.NewSceneCode.GDFloorObjects3= [];
gdjs.NewSceneCode.GDDuckObstacleObjects1= [];
gdjs.NewSceneCode.GDDuckObstacleObjects2= [];
gdjs.NewSceneCode.GDDuckObstacleObjects3= [];
gdjs.NewSceneCode.GDJumpObstacleObjects1= [];
gdjs.NewSceneCode.GDJumpObstacleObjects2= [];
gdjs.NewSceneCode.GDJumpObstacleObjects3= [];
gdjs.NewSceneCode.GDTimeObjects1= [];
gdjs.NewSceneCode.GDTimeObjects2= [];
gdjs.NewSceneCode.GDTimeObjects3= [];
gdjs.NewSceneCode.GDFpsObjects1= [];
gdjs.NewSceneCode.GDFpsObjects2= [];
gdjs.NewSceneCode.GDFpsObjects3= [];
gdjs.NewSceneCode.GDNoOfObstaclesObjects1= [];
gdjs.NewSceneCode.GDNoOfObstaclesObjects2= [];
gdjs.NewSceneCode.GDNoOfObstaclesObjects3= [];
gdjs.NewSceneCode.GDDebugGuideObjects1= [];
gdjs.NewSceneCode.GDDebugGuideObjects2= [];
gdjs.NewSceneCode.GDDebugGuideObjects3= [];
gdjs.NewSceneCode.GDShowScoreObjects1= [];
gdjs.NewSceneCode.GDShowScoreObjects2= [];
gdjs.NewSceneCode.GDShowScoreObjects3= [];
gdjs.NewSceneCode.GDGameOverObjects1= [];
gdjs.NewSceneCode.GDGameOverObjects2= [];
gdjs.NewSceneCode.GDGameOverObjects3= [];
gdjs.NewSceneCode.GDRestartObjects1= [];
gdjs.NewSceneCode.GDRestartObjects2= [];
gdjs.NewSceneCode.GDRestartObjects3= [];
gdjs.NewSceneCode.GDStartObjects1= [];
gdjs.NewSceneCode.GDStartObjects2= [];
gdjs.NewSceneCode.GDStartObjects3= [];
gdjs.NewSceneCode.GDCreditsObjects1= [];
gdjs.NewSceneCode.GDCreditsObjects2= [];
gdjs.NewSceneCode.GDCreditsObjects3= [];
gdjs.NewSceneCode.GDTutorialObjects1= [];
gdjs.NewSceneCode.GDTutorialObjects2= [];
gdjs.NewSceneCode.GDTutorialObjects3= [];

gdjs.NewSceneCode.conditionTrue_0 = {val:false};
gdjs.NewSceneCode.condition0IsTrue_0 = {val:false};
gdjs.NewSceneCode.condition1IsTrue_0 = {val:false};
gdjs.NewSceneCode.condition2IsTrue_0 = {val:false};


gdjs.NewSceneCode.eventsList0x6b6774 = function(runtimeScene) {

{

gdjs.NewSceneCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects2[k] = gdjs.NewSceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects2.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects2[i].addPolarForce(0, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Speed")), 0);
}
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects2[i].setAnimation(1);
}
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects2[i].setAnimation(2);
}
}}

}


{

gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects1[k] = gdjs.NewSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
gdjs.NewSceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].addPolarForce(0, 15, 0);
}
}}

}


}; //End of gdjs.NewSceneCode.eventsList0x6b6774
gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDDuckObstacleObjects2Objects = Hashtable.newFrom({"DuckObstacle": gdjs.NewSceneCode.GDDuckObstacleObjects2});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDJumpObstacleObjects1Objects = Hashtable.newFrom({"JumpObstacle": gdjs.NewSceneCode.GDJumpObstacleObjects1});gdjs.NewSceneCode.eventsList0x6c15c4 = function(runtimeScene) {

{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("ObjectSpawn")) == 1;
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDDuckObstacleObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDDuckObstacleObjects2Objects, 800, 360, "");
}{runtimeScene.getVariables().get("Time").setNumber(0);
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("ObjectSpawn")) == 2;
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDJumpObstacleObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDJumpObstacleObjects1Objects, 800, 450, "");
}{runtimeScene.getVariables().get("Time").setNumber(0);
}}

}


}; //End of gdjs.NewSceneCode.eventsList0x6c15c4
gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDDuckObstacleObjects2Objects = Hashtable.newFrom({"DuckObstacle": gdjs.NewSceneCode.GDDuckObstacleObjects2});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDJumpObstacleObjects1Objects = Hashtable.newFrom({"JumpObstacle": gdjs.NewSceneCode.GDJumpObstacleObjects1});gdjs.NewSceneCode.eventsList0x73609c = function(runtimeScene) {

{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("ObjectSpawn")) == 1;
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDDuckObstacleObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDDuckObstacleObjects2Objects, 800, 360, "");
}{runtimeScene.getVariables().get("Time").setNumber(0);
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("ObjectSpawn")) == 2;
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDJumpObstacleObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDJumpObstacleObjects1Objects, 800, 450, "");
}{runtimeScene.getVariables().get("Time").setNumber(0);
}}

}


}; //End of gdjs.NewSceneCode.eventsList0x73609c
gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDDuckObstacleObjects2Objects = Hashtable.newFrom({"DuckObstacle": gdjs.NewSceneCode.GDDuckObstacleObjects2});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDJumpObstacleObjects1Objects = Hashtable.newFrom({"JumpObstacle": gdjs.NewSceneCode.GDJumpObstacleObjects1});gdjs.NewSceneCode.eventsList0x6c7f04 = function(runtimeScene) {

{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("ObjectSpawn")) == 1;
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDDuckObstacleObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDDuckObstacleObjects2Objects, 800, 360, "");
}{runtimeScene.getVariables().get("Time").setNumber(0);
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("ObjectSpawn")) == 2;
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDJumpObstacleObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDJumpObstacleObjects1Objects, 800, 450, "");
}{runtimeScene.getVariables().get("Time").setNumber(0);
}}

}


}; //End of gdjs.NewSceneCode.eventsList0x6c7f04
gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDDuckObstacleObjects2Objects = Hashtable.newFrom({"DuckObstacle": gdjs.NewSceneCode.GDDuckObstacleObjects2});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDJumpObstacleObjects1Objects = Hashtable.newFrom({"JumpObstacle": gdjs.NewSceneCode.GDJumpObstacleObjects1});gdjs.NewSceneCode.eventsList0x728e84 = function(runtimeScene) {

{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("ObjectSpawn")) == 1;
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDDuckObstacleObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDDuckObstacleObjects2Objects, 800, 360, "");
}{runtimeScene.getVariables().get("Time").setNumber(0);
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("ObjectSpawn")) == 2;
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDJumpObstacleObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDJumpObstacleObjects1Objects, 800, 450, "");
}{runtimeScene.getVariables().get("Time").setNumber(0);
}}

}


}; //End of gdjs.NewSceneCode.eventsList0x728e84
gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDDuckObstacleObjects1Objects = Hashtable.newFrom({"DuckObstacle": gdjs.NewSceneCode.GDDuckObstacleObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDJumpObstacleObjects1Objects = Hashtable.newFrom({"JumpObstacle": gdjs.NewSceneCode.GDJumpObstacleObjects1});gdjs.NewSceneCode.eventsList0x5b6e18 = function(runtimeScene) {

{


{
}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("state")) == 1;
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDDuckObstacleObjects1.createFrom(runtimeScene.getObjects("DuckObstacle"));
gdjs.NewSceneCode.GDFloorObjects1.createFrom(runtimeScene.getObjects("Floor"));
gdjs.NewSceneCode.GDJumpObstacleObjects1.createFrom(runtimeScene.getObjects("JumpObstacle"));
gdjs.NewSceneCode.GDShowScoreObjects1.createFrom(runtimeScene.getObjects("ShowScore"));
gdjs.NewSceneCode.GDStartObjects1.createFrom(runtimeScene.getObjects("Start"));
gdjs.NewSceneCode.GDTimeObjects1.createFrom(runtimeScene.getObjects("Time"));
gdjs.NewSceneCode.GDTutorialObjects1.createFrom(runtimeScene.getObjects("Tutorial"));
gdjs.NewSceneCode.GDbackground1Objects1.createFrom(runtimeScene.getObjects("background1"));
gdjs.NewSceneCode.GDbackground2Objects1.createFrom(runtimeScene.getObjects("background2"));
gdjs.NewSceneCode.GDbackground3Objects1.createFrom(runtimeScene.getObjects("background3"));
gdjs.NewSceneCode.GDbackground4Objects1.createFrom(runtimeScene.getObjects("background4"));
gdjs.NewSceneCode.GDbackground5Objects1.createFrom(runtimeScene.getObjects("background5"));
gdjs.NewSceneCode.GDbackground6Objects1.createFrom(runtimeScene.getObjects("background6"));
{for(var i = 0, len = gdjs.NewSceneCode.GDFloorObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDFloorObjects1[i].addPolarForce(180, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Speed")), 0);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDDuckObstacleObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDDuckObstacleObjects1[i].addPolarForce(180, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Speed")), 0);
}
}{runtimeScene.getVariables().get("Time").add(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}{for(var i = 0, len = gdjs.NewSceneCode.GDTimeObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDTimeObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("Time")));
}
}{runtimeScene.getVariables().get("scrollspeed").setNumber(1);
}{for(var i = 0, len = gdjs.NewSceneCode.GDbackground1Objects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDbackground1Objects1[i].setX(gdjs.NewSceneCode.GDbackground1Objects1[i].getX() - (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("scrollspeed"))));
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDbackground2Objects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDbackground2Objects1[i].setX(gdjs.NewSceneCode.GDbackground2Objects1[i].getX() - (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("scrollspeed")) * 2));
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDbackground4Objects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDbackground4Objects1[i].setX(gdjs.NewSceneCode.GDbackground4Objects1[i].getX() - (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("scrollspeed")) * 4));
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDbackground3Objects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDbackground3Objects1[i].setX(gdjs.NewSceneCode.GDbackground3Objects1[i].getX() - (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("scrollspeed")) * 3));
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDbackground5Objects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDbackground5Objects1[i].setX(gdjs.NewSceneCode.GDbackground5Objects1[i].getX() - (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("scrollspeed")) * 5));
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDbackground6Objects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDbackground6Objects1[i].setX(gdjs.NewSceneCode.GDbackground6Objects1[i].getX() - (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("scrollspeed")) * 6));
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDShowScoreObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDShowScoreObjects1[i].returnVariable(gdjs.NewSceneCode.GDShowScoreObjects1[i].getVariables().getFromIndex(0)).add(1);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDShowScoreObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDShowScoreObjects1[i].setString((gdjs.RuntimeObject.getVariableString(gdjs.NewSceneCode.GDShowScoreObjects1[i].getVariables().getFromIndex(0))));
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDStartObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDStartObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDTutorialObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDTutorialObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDJumpObstacleObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDJumpObstacleObjects1[i].addPolarForce(180, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Speed")), 0);
}
}
{ //Subevents
gdjs.NewSceneCode.eventsList0x6b6774(runtimeScene);} //End of subevents
}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Speed")) == 200;
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
gdjs.NewSceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Time")) > 1;
}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("ObjectSpawn").setNumber(gdjs.random(2));
}
{ //Subevents
gdjs.NewSceneCode.eventsList0x6c15c4(runtimeScene);} //End of subevents
}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Speed")) == 300;
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
gdjs.NewSceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Time")) > 0.6;
}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("ObjectSpawn").setNumber(gdjs.random(2));
}
{ //Subevents
gdjs.NewSceneCode.eventsList0x73609c(runtimeScene);} //End of subevents
}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Speed")) == 400;
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
gdjs.NewSceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Time")) > 0.4;
}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("ObjectSpawn").setNumber(gdjs.random(2));
}
{ //Subevents
gdjs.NewSceneCode.eventsList0x6c7f04(runtimeScene);} //End of subevents
}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Speed")) == 500;
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
gdjs.NewSceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Time")) > 0.3;
}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("ObjectSpawn").setNumber(gdjs.random(2));
}
{ //Subevents
gdjs.NewSceneCode.eventsList0x728e84(runtimeScene);} //End of subevents
}

}


{

gdjs.NewSceneCode.GDDuckObstacleObjects1.createFrom(runtimeScene.getObjects("DuckObstacle"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDDuckObstacleObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDDuckObstacleObjects1[i].getX() <= -(200) ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDDuckObstacleObjects1[k] = gdjs.NewSceneCode.GDDuckObstacleObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDDuckObstacleObjects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDDuckObstacleObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDDuckObstacleObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDDuckObstacleObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.NewSceneCode.GDJumpObstacleObjects1.createFrom(runtimeScene.getObjects("JumpObstacle"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDJumpObstacleObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDJumpObstacleObjects1[i].getX() <= -(200) ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDJumpObstacleObjects1[k] = gdjs.NewSceneCode.GDJumpObstacleObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDJumpObstacleObjects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDJumpObstacleObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDJumpObstacleObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDJumpObstacleObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("state")) == 0;
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
gdjs.NewSceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("state").setNumber(1);
}{gdjs.evtTools.sound.playMusic(runtimeScene, "bensound-goinghigher.mp3", true, 10, 1);
}}

}


{

gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects1[k] = gdjs.NewSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
gdjs.NewSceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("WasJumping")) == 0;
}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "jump.mp3", false, 20, 1);
}{runtimeScene.getGame().getVariables().get("WasJumping").setNumber(1);
}}

}


{

gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.NewSceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping()) ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects1[k] = gdjs.NewSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("WasJumping").setNumber(0);
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Debug")) == 1;
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDDuckObstacleObjects1.createFrom(runtimeScene.getObjects("DuckObstacle"));
gdjs.NewSceneCode.GDFpsObjects1.createFrom(runtimeScene.getObjects("Fps"));
gdjs.NewSceneCode.GDJumpObstacleObjects1.createFrom(runtimeScene.getObjects("JumpObstacle"));
gdjs.NewSceneCode.GDNoOfObstaclesObjects1.createFrom(runtimeScene.getObjects("NoOfObstacles"));
{for(var i = 0, len = gdjs.NewSceneCode.GDFpsObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDFpsObjects1[i].setString("FPS =" + gdjs.evtTools.common.toString(Math.round(1 / gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene))));
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDDuckObstacleObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDDuckObstacleObjects1[i].activateBehavior("Platform", false);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDNoOfObstaclesObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDNoOfObstaclesObjects1[i].setString("No of Obstacles Loaded =" + gdjs.evtTools.common.toString(gdjs.evtTools.object.pickedObjectsCount(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDDuckObstacleObjects1Objects) + gdjs.evtTools.object.pickedObjectsCount(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDJumpObstacleObjects1Objects)));
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDJumpObstacleObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDJumpObstacleObjects1[i].activateBehavior("Platform", false);
}
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDCreditsObjects1.createFrom(runtimeScene.getObjects("Credits"));
gdjs.NewSceneCode.GDDuckObstacleObjects1.createFrom(runtimeScene.getObjects("DuckObstacle"));
gdjs.NewSceneCode.GDGameOverObjects1.createFrom(runtimeScene.getObjects("GameOver"));
gdjs.NewSceneCode.GDRestartObjects1.createFrom(runtimeScene.getObjects("Restart"));
{runtimeScene.getVariables().get("state").setNumber(0);
}{for(var i = 0, len = gdjs.NewSceneCode.GDGameOverObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDGameOverObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDRestartObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDRestartObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDDuckObstacleObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDDuckObstacleObjects1[i].activateBehavior("Platform", true);
}
}{runtimeScene.getVariables().get("Speed").setNumber(200);
}{for(var i = 0, len = gdjs.NewSceneCode.GDCreditsObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDCreditsObjects1[i].hide();
}
}{runtimeScene.getGame().getVariables().get("Debug").setNumber(0);
}}

}


{

gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDPlayerObjects1[i].getX() < 0 ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects1[k] = gdjs.NewSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("state").setNumber(2);
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("state")) == 2;
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDCreditsObjects1.createFrom(runtimeScene.getObjects("Credits"));
gdjs.NewSceneCode.GDGameOverObjects1.createFrom(runtimeScene.getObjects("GameOver"));
gdjs.NewSceneCode.GDRestartObjects1.createFrom(runtimeScene.getObjects("Restart"));
{for(var i = 0, len = gdjs.NewSceneCode.GDGameOverObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDGameOverObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDRestartObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDRestartObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDCreditsObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDCreditsObjects1[i].hide(false);
}
}}

}


{

gdjs.NewSceneCode.GDbackgroundObjects1.createFrom(runtimeScene.getObjects("background"));
gdjs.NewSceneCode.GDbackground1Objects1.createFrom(runtimeScene.getObjects("background1"));
gdjs.NewSceneCode.GDbackground2Objects1.createFrom(runtimeScene.getObjects("background2"));
gdjs.NewSceneCode.GDbackground3Objects1.createFrom(runtimeScene.getObjects("background3"));
gdjs.NewSceneCode.GDbackground4Objects1.createFrom(runtimeScene.getObjects("background4"));
gdjs.NewSceneCode.GDbackground5Objects1.createFrom(runtimeScene.getObjects("background5"));
gdjs.NewSceneCode.GDbackground6Objects1.createFrom(runtimeScene.getObjects("background6"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDbackgroundObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDbackgroundObjects1[i].getX() <= -(976) ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDbackgroundObjects1[k] = gdjs.NewSceneCode.GDbackgroundObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDbackgroundObjects1.length = k;for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDbackground1Objects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDbackground1Objects1[i].getX() <= -(976) ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDbackground1Objects1[k] = gdjs.NewSceneCode.GDbackground1Objects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDbackground1Objects1.length = k;for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDbackground2Objects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDbackground2Objects1[i].getX() <= -(976) ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDbackground2Objects1[k] = gdjs.NewSceneCode.GDbackground2Objects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDbackground2Objects1.length = k;for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDbackground3Objects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDbackground3Objects1[i].getX() <= -(976) ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDbackground3Objects1[k] = gdjs.NewSceneCode.GDbackground3Objects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDbackground3Objects1.length = k;for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDbackground5Objects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDbackground5Objects1[i].getX() <= -(976) ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDbackground5Objects1[k] = gdjs.NewSceneCode.GDbackground5Objects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDbackground5Objects1.length = k;for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDbackground4Objects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDbackground4Objects1[i].getX() <= -(976) ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDbackground4Objects1[k] = gdjs.NewSceneCode.GDbackground4Objects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDbackground4Objects1.length = k;for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDbackground6Objects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDbackground6Objects1[i].getX() <= -(976) ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDbackground6Objects1[k] = gdjs.NewSceneCode.GDbackground6Objects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDbackground6Objects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDbackgroundObjects1 */
/* Reuse gdjs.NewSceneCode.GDbackground1Objects1 */
/* Reuse gdjs.NewSceneCode.GDbackground2Objects1 */
/* Reuse gdjs.NewSceneCode.GDbackground3Objects1 */
/* Reuse gdjs.NewSceneCode.GDbackground4Objects1 */
/* Reuse gdjs.NewSceneCode.GDbackground5Objects1 */
/* Reuse gdjs.NewSceneCode.GDbackground6Objects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDbackgroundObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDbackgroundObjects1[i].setX(992);
}
for(var i = 0, len = gdjs.NewSceneCode.GDbackground1Objects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDbackground1Objects1[i].setX(992);
}
for(var i = 0, len = gdjs.NewSceneCode.GDbackground2Objects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDbackground2Objects1[i].setX(992);
}
for(var i = 0, len = gdjs.NewSceneCode.GDbackground3Objects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDbackground3Objects1[i].setX(992);
}
for(var i = 0, len = gdjs.NewSceneCode.GDbackground5Objects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDbackground5Objects1[i].setX(992);
}
for(var i = 0, len = gdjs.NewSceneCode.GDbackground4Objects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDbackground4Objects1[i].setX(992);
}
for(var i = 0, len = gdjs.NewSceneCode.GDbackground6Objects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDbackground6Objects1[i].setX(992);
}
}}

}


{

gdjs.NewSceneCode.GDFloorObjects1.createFrom(runtimeScene.getObjects("Floor"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDFloorObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDFloorObjects1[i].getX() <= -(798) ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDFloorObjects1[k] = gdjs.NewSceneCode.GDFloorObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDFloorObjects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDFloorObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDFloorObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDFloorObjects1[i].setX(800);
}
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num1");
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDFpsObjects1.createFrom(runtimeScene.getObjects("Fps"));
gdjs.NewSceneCode.GDNoOfObstaclesObjects1.createFrom(runtimeScene.getObjects("NoOfObstacles"));
{runtimeScene.getGame().getVariables().get("Debug").setNumber(1);
}{for(var i = 0, len = gdjs.NewSceneCode.GDNoOfObstaclesObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDNoOfObstaclesObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDFpsObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDFpsObjects1[i].hide(false);
}
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num2");
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDDuckObstacleObjects1.createFrom(runtimeScene.getObjects("DuckObstacle"));
gdjs.NewSceneCode.GDFpsObjects1.createFrom(runtimeScene.getObjects("Fps"));
gdjs.NewSceneCode.GDNoOfObstaclesObjects1.createFrom(runtimeScene.getObjects("NoOfObstacles"));
{runtimeScene.getGame().getVariables().get("Debug").setNumber(0);
}{for(var i = 0, len = gdjs.NewSceneCode.GDFpsObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDFpsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDNoOfObstaclesObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDNoOfObstaclesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDDuckObstacleObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDDuckObstacleObjects1[i].activateBehavior("Platform", true);
}
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
gdjs.NewSceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("state")) == 2;
}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "NewScene", true);
}}

}


{

gdjs.NewSceneCode.GDShowScoreObjects1.createFrom(runtimeScene.getObjects("ShowScore"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDShowScoreObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDShowScoreObjects1[i].getVariableNumber(gdjs.NewSceneCode.GDShowScoreObjects1[i].getVariables().getFromIndex(0)) > 500 ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDShowScoreObjects1[k] = gdjs.NewSceneCode.GDShowScoreObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDShowScoreObjects1.length = k;}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDShowScoreObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDShowScoreObjects1[i].getVariableNumber(gdjs.NewSceneCode.GDShowScoreObjects1[i].getVariables().getFromIndex(0)) < 1000 ) {
        gdjs.NewSceneCode.condition1IsTrue_0.val = true;
        gdjs.NewSceneCode.GDShowScoreObjects1[k] = gdjs.NewSceneCode.GDShowScoreObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDShowScoreObjects1.length = k;}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("Speed").setNumber(300);
}}

}


{

gdjs.NewSceneCode.GDShowScoreObjects1.createFrom(runtimeScene.getObjects("ShowScore"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDShowScoreObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDShowScoreObjects1[i].getVariableNumber(gdjs.NewSceneCode.GDShowScoreObjects1[i].getVariables().getFromIndex(0)) > 1000 ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDShowScoreObjects1[k] = gdjs.NewSceneCode.GDShowScoreObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDShowScoreObjects1.length = k;}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDShowScoreObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDShowScoreObjects1[i].getVariableNumber(gdjs.NewSceneCode.GDShowScoreObjects1[i].getVariables().getFromIndex(0)) < 1500 ) {
        gdjs.NewSceneCode.condition1IsTrue_0.val = true;
        gdjs.NewSceneCode.GDShowScoreObjects1[k] = gdjs.NewSceneCode.GDShowScoreObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDShowScoreObjects1.length = k;}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("Speed").setNumber(400);
}}

}


{

gdjs.NewSceneCode.GDShowScoreObjects1.createFrom(runtimeScene.getObjects("ShowScore"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDShowScoreObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDShowScoreObjects1[i].getVariableNumber(gdjs.NewSceneCode.GDShowScoreObjects1[i].getVariables().getFromIndex(0)) > 2000 ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDShowScoreObjects1[k] = gdjs.NewSceneCode.GDShowScoreObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDShowScoreObjects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("Speed").setNumber(500);
}}

}


}; //End of gdjs.NewSceneCode.eventsList0x5b6e18


gdjs.NewSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.NewSceneCode.GDPlayerObjects1.length = 0;
gdjs.NewSceneCode.GDPlayerObjects2.length = 0;
gdjs.NewSceneCode.GDPlayerObjects3.length = 0;
gdjs.NewSceneCode.GDbackgroundObjects1.length = 0;
gdjs.NewSceneCode.GDbackgroundObjects2.length = 0;
gdjs.NewSceneCode.GDbackgroundObjects3.length = 0;
gdjs.NewSceneCode.GDbackground1Objects1.length = 0;
gdjs.NewSceneCode.GDbackground1Objects2.length = 0;
gdjs.NewSceneCode.GDbackground1Objects3.length = 0;
gdjs.NewSceneCode.GDbackground2Objects1.length = 0;
gdjs.NewSceneCode.GDbackground2Objects2.length = 0;
gdjs.NewSceneCode.GDbackground2Objects3.length = 0;
gdjs.NewSceneCode.GDbackground3Objects1.length = 0;
gdjs.NewSceneCode.GDbackground3Objects2.length = 0;
gdjs.NewSceneCode.GDbackground3Objects3.length = 0;
gdjs.NewSceneCode.GDbackground4Objects1.length = 0;
gdjs.NewSceneCode.GDbackground4Objects2.length = 0;
gdjs.NewSceneCode.GDbackground4Objects3.length = 0;
gdjs.NewSceneCode.GDbackground5Objects1.length = 0;
gdjs.NewSceneCode.GDbackground5Objects2.length = 0;
gdjs.NewSceneCode.GDbackground5Objects3.length = 0;
gdjs.NewSceneCode.GDbackground6Objects1.length = 0;
gdjs.NewSceneCode.GDbackground6Objects2.length = 0;
gdjs.NewSceneCode.GDbackground6Objects3.length = 0;
gdjs.NewSceneCode.GDFloorObjects1.length = 0;
gdjs.NewSceneCode.GDFloorObjects2.length = 0;
gdjs.NewSceneCode.GDFloorObjects3.length = 0;
gdjs.NewSceneCode.GDDuckObstacleObjects1.length = 0;
gdjs.NewSceneCode.GDDuckObstacleObjects2.length = 0;
gdjs.NewSceneCode.GDDuckObstacleObjects3.length = 0;
gdjs.NewSceneCode.GDJumpObstacleObjects1.length = 0;
gdjs.NewSceneCode.GDJumpObstacleObjects2.length = 0;
gdjs.NewSceneCode.GDJumpObstacleObjects3.length = 0;
gdjs.NewSceneCode.GDTimeObjects1.length = 0;
gdjs.NewSceneCode.GDTimeObjects2.length = 0;
gdjs.NewSceneCode.GDTimeObjects3.length = 0;
gdjs.NewSceneCode.GDFpsObjects1.length = 0;
gdjs.NewSceneCode.GDFpsObjects2.length = 0;
gdjs.NewSceneCode.GDFpsObjects3.length = 0;
gdjs.NewSceneCode.GDNoOfObstaclesObjects1.length = 0;
gdjs.NewSceneCode.GDNoOfObstaclesObjects2.length = 0;
gdjs.NewSceneCode.GDNoOfObstaclesObjects3.length = 0;
gdjs.NewSceneCode.GDDebugGuideObjects1.length = 0;
gdjs.NewSceneCode.GDDebugGuideObjects2.length = 0;
gdjs.NewSceneCode.GDDebugGuideObjects3.length = 0;
gdjs.NewSceneCode.GDShowScoreObjects1.length = 0;
gdjs.NewSceneCode.GDShowScoreObjects2.length = 0;
gdjs.NewSceneCode.GDShowScoreObjects3.length = 0;
gdjs.NewSceneCode.GDGameOverObjects1.length = 0;
gdjs.NewSceneCode.GDGameOverObjects2.length = 0;
gdjs.NewSceneCode.GDGameOverObjects3.length = 0;
gdjs.NewSceneCode.GDRestartObjects1.length = 0;
gdjs.NewSceneCode.GDRestartObjects2.length = 0;
gdjs.NewSceneCode.GDRestartObjects3.length = 0;
gdjs.NewSceneCode.GDStartObjects1.length = 0;
gdjs.NewSceneCode.GDStartObjects2.length = 0;
gdjs.NewSceneCode.GDStartObjects3.length = 0;
gdjs.NewSceneCode.GDCreditsObjects1.length = 0;
gdjs.NewSceneCode.GDCreditsObjects2.length = 0;
gdjs.NewSceneCode.GDCreditsObjects3.length = 0;
gdjs.NewSceneCode.GDTutorialObjects1.length = 0;
gdjs.NewSceneCode.GDTutorialObjects2.length = 0;
gdjs.NewSceneCode.GDTutorialObjects3.length = 0;

gdjs.NewSceneCode.eventsList0x5b6e18(runtimeScene);
return;

}

gdjs['NewSceneCode'] = gdjs.NewSceneCode;
