const moonPhaseDescription = phase => {

  const moonPhase = (((.97 <= phase) && (phase <= 1.0)) || ((0 <= phase) && (phase <= 0.03))) ? "The moon is a New Moon." :
                    ((0.03 < phase) && (phase <= 0.22)) ? "The moon is past New in the Waxing crescent phase." :
                    ((0.22 < phase) && (phase <= 0.27)) ? "The moon is in the First Quarter." :
                    ((0.27 < phase) && (phase <= 0.47)) ? "The moon is nearing Full in the Waxing Gibbous phase." :
                    ((0.47 < phase) && (phase <= 0.53)) ? "The moon is a Full Moon." :
                    ((0.53 < phase) && (phase <= 0.72)) ? "The moon is past Full in the Waning Gibbous phase." :
                    ((0.72 < phase) && (phase <= 0.78)) ? "The moon is in the Last Quarter." :
                    ((0.78 < phase) && (phase <= 0.97)) ? "The moon in almost New in the Waning Crescent phase." : "";
  return moonPhase;
}

export default moonPhaseDescription;
