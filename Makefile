# Diernus — deploy helpers
# The site is a no-build static folder. wrangler pages deploy uploads
# the current directory to Cloudflare Pages and updates diernus.pages.dev.

PROJECT := diernus

.PHONY: deploy preview open login status

deploy:
	wrangler pages deploy . --project-name=$(PROJECT)

# alias: `make push` runs the same thing
push: deploy

# show the latest deployments
status:
	wrangler pages deployment list --project-name=$(PROJECT)

# open the live site in your default browser
open:
	@open https://$(PROJECT).pages.dev

# list all pages projects on this account
projects:
	wrangler pages project list

# show who's logged in to wrangler
whoami:
	wrangler whoami
