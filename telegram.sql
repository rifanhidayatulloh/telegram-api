toc.dat                                                                                             0000600 0004000 0002000 00000005743 14254273667 0014470 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        PGDMP           0                z            db_telegram    14.2    14.2 
    ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false         ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false         ?           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false         ?           1262    16807    db_telegram    DATABASE     k   CREATE DATABASE db_telegram WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_Indonesia.1252';
    DROP DATABASE db_telegram;
                postgres    false         ?            1259    16816    chats    TABLE     k  CREATE TABLE public.chats (
    id character varying(255) NOT NULL,
    sender character varying(255),
    receiver character varying(255),
    chat_type character varying(255),
    message character varying(255),
    "isRead" character varying(255),
    photo character varying(255),
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);
    DROP TABLE public.chats;
       public         heap    postgres    false         ?            1259    16808    users    TABLE     ?  CREATE TABLE public.users (
    id character varying(255) NOT NULL,
    email character varying(255),
    password character varying(255),
    username character varying(50),
    fullname character varying(255),
    phone character varying(255),
    bio character varying(255),
    photo character varying(255),
    is_verified integer,
    is_active integer,
    verify_token character varying(255),
    crated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false         ?          0    16816    chats 
   TABLE DATA           f   COPY public.chats (id, sender, receiver, chat_type, message, "isRead", photo, created_at) FROM stdin;
    public          postgres    false    210       3313.dat ?          0    16808    users 
   TABLE DATA           ?   COPY public.users (id, email, password, username, fullname, phone, bio, photo, is_verified, is_active, verify_token, crated_at) FROM stdin;
    public          postgres    false    209       3312.dat d           2606    16823    chats chats_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.chats
    ADD CONSTRAINT chats_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.chats DROP CONSTRAINT chats_pkey;
       public            postgres    false    210         b           2606    16814    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    209                                     3313.dat                                                                                            0000600 0004000 0002000 00000014033 14254273667 0014264 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        9d1eff29-7a71-4927-843f-a9229bb41a5b	b01369bf-fa59-45be-8db5-168855453c45	1b9f5b52-b439-4509-930e-6c559c84e2a6	\N	a	\N	\N	2022-06-06 22:08:24.669883+07
6815701d-2aef-4af0-abe7-d7b7ddefab47	b01369bf-fa59-45be-8db5-168855453c45	1b9f5b52-b439-4509-930e-6c559c84e2a6	\N	a	\N	\N	2022-06-06 22:08:25.815166+07
c097cc41-77f8-4de9-ae3e-c22d2c214e81	1b9f5b52-b439-4509-930e-6c559c84e2a6	b01369bf-fa59-45be-8db5-168855453c45	\N	a	\N	\N	2022-06-06 22:10:27.29752+07
fabd2732-47eb-4eeb-9207-ab08ca998e25	1b9f5b52-b439-4509-930e-6c559c84e2a6	b01369bf-fa59-45be-8db5-168855453c45	\N	a	\N	\N	2022-06-06 22:10:58.914195+07
19339eef-cd8e-42df-9ed9-f8968f0e135d	1b9f5b52-b439-4509-930e-6c559c84e2a6	b01369bf-fa59-45be-8db5-168855453c45	\N	a	\N	\N	2022-06-06 22:11:15.962784+07
82bcec8b-e578-4059-9b52-11109ff20b5e	b01369bf-fa59-45be-8db5-168855453c45	1b9f5b52-b439-4509-930e-6c559c84e2a6	\N	a	\N	\N	2022-06-06 22:11:22.667226+07
e5f61805-fde4-46b5-b200-5183a01049cd	b01369bf-fa59-45be-8db5-168855453c45	2110d171-3cfc-497a-a1b1-99ab4bc45248	\N	aaa	\N	\N	2022-06-06 21:03:09.59336+07
47a13992-3177-4acd-b822-4e2ed50f0fcc	b01369bf-fa59-45be-8db5-168855453c45	2110d171-3cfc-497a-a1b1-99ab4bc45248	\N	aaaaaaaa	\N	\N	2022-06-06 21:04:34.617202+07
9373efa1-8f6a-48f2-81fe-970d9ff30509	b01369bf-fa59-45be-8db5-168855453c45	2110d171-3cfc-497a-a1b1-99ab4bc45248	\N	aaaaaaaaa	\N	\N	2022-06-06 21:13:40.379376+07
f6b47e85-14d7-46ab-bfda-4de86b8c4ff1	b01369bf-fa59-45be-8db5-168855453c45	1b9f5b52-b439-4509-930e-6c559c84e2a6	\N	aa	\N	\N	2022-06-06 21:32:27.321037+07
056276e4-e66b-4b04-bd57-8e0b95be3c38	b01369bf-fa59-45be-8db5-168855453c45	1b9f5b52-b439-4509-930e-6c559c84e2a6	\N	aa	\N	\N	2022-06-06 22:02:59.421576+07
ca94b14c-6209-41a6-9db9-b8c2a73f3164	b01369bf-fa59-45be-8db5-168855453c45	2110d171-3cfc-497a-a1b1-99ab4bc45248	\N	aaa	\N	\N	2022-06-06 22:05:34.951301+07
b06c67db-3c38-4661-9fc3-c4eefbe7e0f4	b01369bf-fa59-45be-8db5-168855453c45	2110d171-3cfc-497a-a1b1-99ab4bc45248	\N	aaa	\N	\N	2022-06-06 22:05:36.251618+07
f40b76de-18ce-4c62-a50c-e8ef2f312bb0	b01369bf-fa59-45be-8db5-168855453c45	2110d171-3cfc-497a-a1b1-99ab4bc45248	\N	a	\N	\N	2022-06-06 22:05:37.153157+07
612d033e-d302-450a-a3a0-b4b97348348e	b01369bf-fa59-45be-8db5-168855453c45	2110d171-3cfc-497a-a1b1-99ab4bc45248	\N	a	\N	\N	2022-06-06 22:05:37.838474+07
10a5c9eb-ed9a-4f93-a0c1-0881b9642d83	b01369bf-fa59-45be-8db5-168855453c45	2110d171-3cfc-497a-a1b1-99ab4bc45248	\N	a	\N	\N	2022-06-06 22:05:38.539201+07
9f8afd4f-700f-4562-a91d-0cbbdb603423	b01369bf-fa59-45be-8db5-168855453c45	2110d171-3cfc-497a-a1b1-99ab4bc45248	\N	a	\N	\N	2022-06-06 22:05:39.443924+07
585d01df-c002-43ab-8684-d69e7278182b	b01369bf-fa59-45be-8db5-168855453c45	2110d171-3cfc-497a-a1b1-99ab4bc45248	\N	a	\N	\N	2022-06-06 22:05:40.140167+07
cbe7ab39-f366-466c-8b3a-9ecf14967ef5	b01369bf-fa59-45be-8db5-168855453c45	2110d171-3cfc-497a-a1b1-99ab4bc45248	\N	aa	\N	\N	2022-06-06 22:05:41.481043+07
87d3f67b-5b5a-488c-b15b-f7651ee5db50	b01369bf-fa59-45be-8db5-168855453c45	2110d171-3cfc-497a-a1b1-99ab4bc45248	\N	aaa	\N	\N	2022-06-06 22:05:59.345447+07
21640e37-40b0-4605-9fa4-61f5710cbbdf	b01369bf-fa59-45be-8db5-168855453c45	2110d171-3cfc-497a-a1b1-99ab4bc45248	\N	aaaaaaaaaaaaaaaaa	\N	\N	2022-06-06 22:07:35.029422+07
bad6b7fc-8092-4ff3-98c9-153f2bd04555	b01369bf-fa59-45be-8db5-168855453c45	2110d171-3cfc-497a-a1b1-99ab4bc45248	\N	zzzzzzzzzzz	\N	\N	2022-06-06 22:07:40.137161+07
b75a4a5e-cfbd-4985-af41-8d5b341720cc	b01369bf-fa59-45be-8db5-168855453c45	1b9f5b52-b439-4509-930e-6c559c84e2a6	\N	aaaaaaaaaaaaa	\N	\N	2022-06-06 22:08:20.016224+07
42d593cd-e5f9-4129-a859-352153f35977	b01369bf-fa59-45be-8db5-168855453c45	1b9f5b52-b439-4509-930e-6c559c84e2a6	\N	a	\N	\N	2022-06-06 22:08:20.934204+07
a51c2b24-11cf-45f3-9acf-8689846e87a7	b01369bf-fa59-45be-8db5-168855453c45	1b9f5b52-b439-4509-930e-6c559c84e2a6	\N	a	\N	\N	2022-06-06 22:08:21.35357+07
c0b10a9a-6897-457a-9e5c-d002324fc5e0	b01369bf-fa59-45be-8db5-168855453c45	1b9f5b52-b439-4509-930e-6c559c84e2a6	\N	a	\N	\N	2022-06-06 22:08:21.739265+07
528da66c-f9d5-4778-8dd7-b0418b27a2b2	b01369bf-fa59-45be-8db5-168855453c45	1b9f5b52-b439-4509-930e-6c559c84e2a6	\N	hallo	\N	\N	2022-06-06 22:11:37.146992+07
8fb66c0d-f588-42b5-a657-331f6a5bb62f	1b9f5b52-b439-4509-930e-6c559c84e2a6	b01369bf-fa59-45be-8db5-168855453c45	\N	hai	\N	\N	2022-06-06 22:11:41.780171+07
d2877daa-88a9-4ec0-8e41-56ed4a636a2a	b01369bf-fa59-45be-8db5-168855453c45	1b9f5b52-b439-4509-930e-6c559c84e2a6	\N	hallo	\N	\N	2022-06-06 22:11:50.810513+07
2cc23608-cfeb-4ef9-bedd-ecfbcd51fec0	1b9f5b52-b439-4509-930e-6c559c84e2a6	b01369bf-fa59-45be-8db5-168855453c45	\N	hai	\N	\N	2022-06-06 22:11:55.701499+07
d0365031-81b9-47f8-83b2-eefd7c01b393	b01369bf-fa59-45be-8db5-168855453c45	2110d171-3cfc-497a-a1b1-99ab4bc45248	\N	hallo	\N	\N	2022-06-06 22:12:13.556816+07
a54af490-baf9-4a9a-8c86-86a662d00938	1b9f5b52-b439-4509-930e-6c559c84e2a6	b01369bf-fa59-45be-8db5-168855453c45	\N	haii	\N	\N	2022-06-06 22:12:20.544495+07
c7f05ada-e9e5-4796-93a8-ab5a5d469826	1b9f5b52-b439-4509-930e-6c559c84e2a6	b01369bf-fa59-45be-8db5-168855453c45	\N		\N	\N	2022-06-07 09:08:41.355479+07
3d955d53-25fa-4032-bdcb-3eb714d55d89	1b9f5b52-b439-4509-930e-6c559c84e2a6	b01369bf-fa59-45be-8db5-168855453c45	\N	a	\N	\N	2022-06-07 09:08:51.511697+07
a733ed04-baef-49f9-ae9a-0fe2dcfd95d9	b01369bf-fa59-45be-8db5-168855453c45	1b9f5b52-b439-4509-930e-6c559c84e2a6	\N	a	\N	\N	2022-06-07 09:09:44.476621+07
28a722da-7e38-45ee-a0c9-80f9d330fb38	b01369bf-fa59-45be-8db5-168855453c45	1b9f5b52-b439-4509-930e-6c559c84e2a6	\N	a	\N	\N	2022-06-07 09:22:01.529093+07
4f8d4f2c-7c98-4ac0-8cb0-77651905e29f	b01369bf-fa59-45be-8db5-168855453c45	1b9f5b52-b439-4509-930e-6c559c84e2a6	\N	test	\N	\N	2022-06-07 09:22:06.789786+07
e91362c1-67bb-49a9-bb77-ec2045a7e361	1b9f5b52-b439-4509-930e-6c559c84e2a6	b01369bf-fa59-45be-8db5-168855453c45	\N	aa	\N	\N	2022-06-07 09:22:26.943495+07
d05184bb-969b-4d68-9d46-4732b006b963	b01369bf-fa59-45be-8db5-168855453c45	1b9f5b52-b439-4509-930e-6c559c84e2a6	\N	p	\N	\N	2022-06-07 10:11:41.113865+07
d30ddc99-330d-44c0-bc9d-00dd6cfa0018	1b9f5b52-b439-4509-930e-6c559c84e2a6	b01369bf-fa59-45be-8db5-168855453c45	\N	test	\N	\N	2022-06-07 10:11:50.827896+07
\.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     3312.dat                                                                                            0000600 0004000 0002000 00000001076 14254273667 0014266 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1b9f5b52-b439-4509-930e-6c559c84e2a6	usop@gmail.com	$2b$10$YoBkovGbQQKegtqWDFC5.eLpxircR2bIMznInonD/t396E6QrBJQi	\N	Usop	\N	\N	1654528630526.jpg	1	1	\N	2022-06-05 16:02:32.008908+07
2110d171-3cfc-497a-a1b1-99ab4bc45248	zoro@gmail.com	$2b$10$QeJqJXWaXEiXka2lSQ1GVOKkm0RsbRyDEeUUeG5Yb17GSZvELE4BO	\N	Zorro	\N	\N	1654528779772.jpg	1	1	\N	2022-06-05 16:01:55.299958+07
b01369bf-fa59-45be-8db5-168855453c45	sanji@gmail.com	$2b$10$.lVyDKf2jCXCYeYAOE1DAuT8gSezD1ZXpVLqAB7B8gqzJnNLdDdKq	sanji123	Sanji	0812345678890	ini bio	1654571445602.jpg	1	1	\N	2022-06-03 23:14:59.1778+07
\.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                  restore.sql                                                                                         0000600 0004000 0002000 00000006532 14254273667 0015412 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        --
-- NOTE:
--
-- File paths need to be edited. Search for $$PATH$$ and
-- replace it with the path to the directory containing
-- the extracted data files.
--
--
-- PostgreSQL database dump
--

-- Dumped from database version 14.2
-- Dumped by pg_dump version 14.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE db_telegram;
--
-- Name: db_telegram; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE db_telegram WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_Indonesia.1252';


ALTER DATABASE db_telegram OWNER TO postgres;

\connect db_telegram

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: chats; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.chats (
    id character varying(255) NOT NULL,
    sender character varying(255),
    receiver character varying(255),
    chat_type character varying(255),
    message character varying(255),
    "isRead" character varying(255),
    photo character varying(255),
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.chats OWNER TO postgres;

--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id character varying(255) NOT NULL,
    email character varying(255),
    password character varying(255),
    username character varying(50),
    fullname character varying(255),
    phone character varying(255),
    bio character varying(255),
    photo character varying(255),
    is_verified integer,
    is_active integer,
    verify_token character varying(255),
    crated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Data for Name: chats; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.chats (id, sender, receiver, chat_type, message, "isRead", photo, created_at) FROM stdin;
\.
COPY public.chats (id, sender, receiver, chat_type, message, "isRead", photo, created_at) FROM '$$PATH$$/3313.dat';

--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, email, password, username, fullname, phone, bio, photo, is_verified, is_active, verify_token, crated_at) FROM stdin;
\.
COPY public.users (id, email, password, username, fullname, phone, bio, photo, is_verified, is_active, verify_token, crated_at) FROM '$$PATH$$/3312.dat';

--
-- Name: chats chats_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chats
    ADD CONSTRAINT chats_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      