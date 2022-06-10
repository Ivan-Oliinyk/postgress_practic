create TABLE person (
  id SERIAL PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  surname VARCHAR(30) NOT NULL
);

create TABLE post (
  id SERIAL PRIMARY KEY,
  title VARCHAR(30),
  connect VARCHAR(255),
  user_id INTEGER,
  FOREIGN KEY (user_id) REFERENCES person (id)
);