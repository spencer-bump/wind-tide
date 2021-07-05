export const moonPhaseDescription = phase => {

  const moonPhase = (((.97 <= phase) && (phase <= 1.0)) || ((0 <= phase) && (phase <= 0.03))) ? "new moon" :
                    ((0.03 < phase) && (phase <= 0.22)) ? "waxing crescent" :
                    ((0.22 < phase) && (phase <= 0.27)) ? "first quarter" :
                    ((0.27 < phase) && (phase <= 0.47)) ? "waxing gibbous" :
                    ((0.47 < phase) && (phase <= 0.53)) ? "full moon" :
                    ((0.53 < phase) && (phase <= 0.72)) ? "waning gibbous" :
                    ((0.72 < phase) && (phase <= 0.78)) ? "last quarter" :
                    ((0.78 < phase) && (phase <= 0.97)) ? "waning crescent" : "";
  return moonPhase;
}
