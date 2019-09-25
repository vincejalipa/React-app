import React, {Component} from 'react';
import { StreamApp, NotificationDropdown, FlatFeed, LikeButton, Activity, CommentList, CommentField, StatusUpdateForm } from 'react-activity-feed';
import 'react-activity-feed/dist/index.css';
import '../Auto.css'



class Feed extends Component {
  render () {
    return (
      <div className="StreamApp">
      <StreamApp
        apiKey="du8he7epvp94"
        appId="45206"
        token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZTQ0MmUyMmItMDc4Ny00YjJjLTg0ZjMtMWUxMjFiNmE1YTczIn0.Terrx11oy3b4h4zkWSh5r2zD896Sy_QjrvF4jwwHYeY"
      >
        <NotificationDropdown notify />
        <StatusUpdateForm
          feedGroup="timeline"
          userId="e442e22b-0787-4b2c-84f3-1e121b6a5a73" />
        <FlatFeed
          options={ {reactions: { recent: true } } }
          notify
          Activity={(props) =>
              <Activity {...props}
                Footer={() => (
                  <div style={ {padding: '8px 16px'} }>
                    <LikeButton {...props} />
                    <CommentField
                      activity={props.activity}
                      onAddReaction={props.onAddReaction} />
                    <CommentList activityId={props.activity.id} />
                  </div>
                )}
              />
            }
          />

      </StreamApp>
      </div>
    );
  }
}

export default Feed;