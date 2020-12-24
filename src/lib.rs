use dice::error::fmt::{ErrorFormatter as _, HumanReadableErrorFormatter};
use dice::error::localization::Locale;
use dice::Dice;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn dice_run(input: &str) -> String {
    let mut dice = Dice::default();
    let result = dice.run_script(input);

    let output = match result {
        Ok(obj) => obj.to_string(),
        Err(err) => {
            let mut buffer = String::new();
            HumanReadableErrorFormatter::new(true)
                .fmt_pretty(&mut buffer, &err, &Locale::US_ENGLISH)
                .expect("Failed to format.");

            buffer
        }
    };

    format!("{}", output)
}

#[wasm_bindgen]
pub fn dice_disassemble(input: &str) -> String {
    let dice = Dice::default();
    let result = dice.disassemble_script(input);

    let output = match result {
        Ok(obj) => obj,
        Err(err) => err.to_string(),
    };

    format!("{}", output)
}
