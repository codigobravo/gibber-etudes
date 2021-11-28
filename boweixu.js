use =('hydra').then(init => init())
//default
osc(2,.1, -4).out(o0)
//o0 para osciloscopio basico
noise(20, 0.5). pixelate(2000,1).blend(o0).blend(noise(8, 0.3).pixelate(1000,1).rotate(({time}) =>Math.sin(time/5)*3).scale(2)).out(o1)
//o1 para fondo default
render(o1)

Clock.bpm = 60
verb = Reverb('space').bus()

back = Synth[4]('rhodes'),{decay: 8,gain: 15}).connect(verb, .225)
back.chord.seq([[0,0,4,],[1,1,5,7]],2)

drums = Drums({gain:0.2})
drum.fx.add(Distortion({pregain: .9, postgain .name9}))
drum.tidal('kd sd kd[kd,ch]')

//referencia a https://github.com/essteban
osc(13,0,-4)
	.kaleid(3)
	.mask(shape(3,0,.3,1)
	.modulateRotate(osc(1,0,.1,1))
  .modulateRotate(osc(1,0.1,0.9))
  .modulateRotate(osc(1,0.1,0.8))
  .scale(drum.out(2))	
  .add(shape(3,0,2,1).color(0.3,.1,.4,.5)
  .rotate(()=>Math.sin(time))
  .out(o1)
render(01)

Theory.degree.seq(['-i','-iv'],1)
