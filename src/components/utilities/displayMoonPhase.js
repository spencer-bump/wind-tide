export const moonPhaseDescription = phase => {
  let moonPhase = '';
  if (((.97 <= phase) && (phase <= 1.0)) || ((0 <= phase) && (phase <= 0.03))) {
    moonPhase = 'new moon';

  } else if ((0.03 < phase) && (phase <= 0.22)) {
    moonPhase = 'waxing crescent';

  } else if ((0.22 < phase) && (phase <= 0.27)) {
    moonPhase = 'first quarter';

  } else if ((0.27 < phase) && (phase <= 0.47)) {
    moonPhase = 'waxing gibbous';

  } else if ((0.47 < phase) && (phase <= 0.53)) {
    moonPhase = 'full moon';

  } else if ((0.53 < phase) && (phase <= 0.72)) {
    moonPhase = 'waning gibbous';

  } else if ((0.72 < phase) && (phase <= 0.78)) {
    moonPhase = 'last quarter';

  } else if ((0.78 < phase) && (phase <= 0.97)) {
    moonPhase = 'waning crescent';
  }
  return moonPhase;
};

