"use strict";

function correctState() {
  const [canUpdateDishonesty, setCanUpdateDishonesty] = useState(true);
}

function incorrectState() {
  const [canUpdateDishonesty, setCanUpdateDishonesty] = useState(false);
}
