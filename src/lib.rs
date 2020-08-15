use wasm_bindgen::prelude::*;
use worp_dice::runtime::interpreter::context::ExecutionContext;
use worp_dice::syntax::SyntaxTree;

#[wasm_bindgen]
pub fn dice_run(input: &str) -> String {
    let execution_context = ExecutionContext::try_new().expect("should have an execution context");
    let result = execution_context.eval_expression(input);

    let output = match result {
        Ok(obj) => obj.to_string(),
        Err(err) => err.to_string(),
    };

    format!("{}", output,)
}

#[wasm_bindgen]
pub fn dice_parse(input: &str) -> String {
    let result = input.parse::<SyntaxTree>();

    match result {
        Ok(expr) => format!("{:#?}", expr),
        Err(err) => err.to_string(),
    }
}
