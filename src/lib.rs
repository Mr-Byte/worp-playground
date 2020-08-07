use wasm_bindgen::prelude::*;
use worp_dice::runtime::interpreter::context::ExecutionContext;
use worp_dice::syntax::Expression;

#[wasm_bindgen]
pub fn dice_run(input: &str) -> String {
    let execution_context = ExecutionContext::new();
    let result = execution_context.eval_expression(input);

    match result {
        Ok(obj) => obj.to_string(),
        Err(err) => err.to_string(),
    }
}

#[wasm_bindgen]
pub fn dice_parse(input: &str) -> String {
    let result = input.parse::<Expression>();

    match result {
        Ok(obj) => obj.to_string(),
        Err(err) => err.to_string(),
    }
}
