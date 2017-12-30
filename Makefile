make server:
	foreman start -f Procfile.dev

make setup:
	bundle install && \
	bundle exec rails db:create  && \
	bundle exec rails db:migrate  && \
	bundle exec rails db:seed  && \
	yarn install

