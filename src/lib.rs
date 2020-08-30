use wasm_bindgen::prelude::*;
use worp_dice::Dice;

#[wasm_bindgen]
pub fn dice_run(input: &str) -> String {
    let mut dice = Dice::default();
    let result = dice.run_script(input);

    let output = match result {
        Ok(obj) => obj.to_string(),
        Err(err) => err.to_string(),
    };

    format!("{}", output,)
}
