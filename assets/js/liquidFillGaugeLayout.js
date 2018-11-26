var circle_thickness = 0.1;
var wave_animate_time = 1000;

var red_circle_color = "#FF7777";
var red_text_color =  "#FF4444";
var red_wave_text_color = "#FFAAAA";
var red_wave_color = "#FFDDDD";

var config1 = liquidFillGaugeDefaultSettings();
config1.circleColor = red_circle_color;
config1.textColor = red_text_color;
config1.waveTextColor = red_wave_text_color;
config1.waveColor = red_wave_color;
config1.circleThickness = circle_thickness;
config1.textVertPosition = 0.9;
config1.waveAnimateTime = wave_animate_time;
loadLiquidFillGauge("fillgauge1", 95, config1);

var config2 = liquidFillGaugeDefaultSettings();
config2.circleThickness = circle_thickness;
config2.textVertPosition = 0.85;
config2.waveAnimateTime = wave_animate_time;
loadLiquidFillGauge("fillgauge2", 90, config2);

var config3 = liquidFillGaugeDefaultSettings();
config3.circleThickness = circle_thickness;
config3.textVertPosition = 0.8;
config3.waveAnimateTime = wave_animate_time;
loadLiquidFillGauge("fillgauge3", 75, config3);

var config4 = liquidFillGaugeDefaultSettings();
config4.circleThickness = circle_thickness;
config4.textVertPosition = 0.75;
config4.waveAnimateTime = wave_animate_time;
loadLiquidFillGauge("fillgauge4", 75, config4);

var config5 = liquidFillGaugeDefaultSettings();
config5.circleThickness = circle_thickness;
config5.textVertPosition = 0.55;
config5.waveAnimateTime = wave_animate_time;
loadLiquidFillGauge("fillgauge5", 55, config5);
