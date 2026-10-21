# Benchmarks

This book contains no benchmark values on purpose. Numbers in the worked examples are illustrative and labeled so. A figure copied from a book into a target becomes the thing Goodhart's law warns about (see topic 1.2, Goodhart's law and the psychology of metrics).

Where the book mentions published research, such as the DORA research, it describes the pattern and sends you to the source, and tells you to compare against your own baseline.

## Tooling timings

For maintainers: `bin/check` runs in about a second on a laptop. `bin/check --links` resolves several hundred Wikipedia links and takes about two minutes, mostly in retries after rate limits. The site build takes under a minute.
