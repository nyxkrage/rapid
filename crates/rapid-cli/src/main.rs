pub mod cli;
pub mod args;
pub mod commands;
pub mod constants;
pub mod rapid_config;
use crate::rapid_config::config;
use cli::{CliError, RapidCLI, Config};

fn main() -> Result<(), CliError<'static>> {
    config::find_rapid_config();
    // TODO: eventually, the user will be able to persist settings via a global config file
    // and all those settings will be loaded in and passed to this object...
    let app = RapidCLI::new(Config {});
    let args = RapidCLI::parse().get_matches();
    app.run(args)
}
