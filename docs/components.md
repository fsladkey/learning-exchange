### Homepage
path: `/`

```html
<App>
  <NavBar>
    <Logo />
    <SearchBar />
    <UserInfo>
      <ProfileLink />
      <Notifications />
      <Messages />
      <LogOutForm />
    </UserInfo>
  </NavBar>
  <Body>
    <Megasearch />
    <NearbyGroups>
      <GroupLink />...
    </NearbyGroups>
    <NearbyEvents>
      <EventLink />...
    </NearbyEvents>
  </Body>
  <Footer>
    <Copyright />
  </Footer>
</App>
```

### Profile
path: `/profile/:username`

```html
<App>
  <NavBar>
    <Logo />
    <SearchBar />
    <UserInfo>
      <ProfileLink />
      <Notifications />
      <Messages />
      <LogOutForm />
    </UserInfo>
  </NavBar>
  <Body>
    <Profile>
      <Tabs>
        <Groups />
        <Events />
        <Followed />
      </Tabs>
      <Content />
    </Profile>
  </Body>
  <Footer>
    <Copyright />
  </Footer>
</App>
```

### Group
path: `/groups/:id`

```html
<App>
  <NavBar>
    <Logo />
    <SearchBar />
    <UserInfo>
      <ProfileLink />
      <Notifications />
      <Messages />
      <LogOutForm />
    </UserInfo>
  </NavBar>
  <Body>
    <Announcements />
    <GroupEvents />
    <Chat />
  </Body>
  <Footer>
    <Copyright />
  </Footer>
</App>
```


### Event
path: `/events/:id`

```html
<App>
  <NavBar>
    <Logo />
    <SearchBar />
    <UserInfo>
      <ProfileLink />
      <Notifications />
      <Messages />
      <AttendingUsers />
      <LogOutForm />
    </UserInfo>
  </NavBar>
  <Body>
    <Announcements />
    <Chat />
    <Comments />
  </Body>
  <Footer>
    <Copyright />
  </Footer>
</App>
```
