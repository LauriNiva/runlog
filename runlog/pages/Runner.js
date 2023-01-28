import styled from 'styled-components';

export function Runner({children}) {
    return (
        <RunnerStyles>
          <button className="running-button">
            <span className="default">{children}</span>
            <div className="running">
              <div className="outer">
                <div className="body">
                  <div className="arm behind"></div>
                  <div className="arm front"></div>
                  <div className="leg behind"></div>
                  <div className="leg front"></div>
                </div>
              </div>
            </div>
          </button>
        </RunnerStyles>
    )
}


const RunnerStyles = styled.div`
  .running {
    --duration: 0.8s;
    transform: scale(var(--scale, 1));
    .outer {
      animation: outer var(--duration) linear infinite;
      .body {
        background: var(--color);
        height: 15px;
        width: 8px;
        border-radius: 4px;
        transform-origin: 4px 11px;
        position: relative;
        transform: rotate(32deg);
        animation: body var(--duration) linear infinite;
        &:before {
          content: '';
          width: 8px;
          height: 8px;
          border-radius: 4px;
          bottom: 16px;
          left: 0;
          position: absolute;
          background: var(--color);
        }
        .arm,
        .arm:before,
        .leg,
        .leg:before {
          content: '';
          width: var(--w, 11px);
          height: 4px;
          top: var(--t, 0);
          left: var(--l, 2px);
          border-radius: 2px;
          transform-origin: 2px 2px;
          position: absolute;
          background: var(--c, var(--color));
          transform: rotate(var(--r, 0deg));
          animation: var(--name, arm-leg) var(--duration) linear infinite;
        }
        .arm {
          &:before {
            --l: 7px;
            --name: arm-b;
          }
          &.front {
            --r: 24deg;
            --r-to: 164deg;
            &:before {
              --r: -48deg;
              --r-to: -36deg;
            }
          }
          &.behind {
            --r: 164deg;
            --r-to: 24deg;
            &:before {
              --r: -36deg;
              --r-to: -48deg;
            }
          }
        }
        .leg {
          --w: 12px;
          --t: 11px;
          &:before {
            --t: 0;
            --l: 8px;
          }
          &.front {
            --r: 10deg;
            --r-to: 108deg;
            &:before {
              --r: 18deg;
              --r-to: 76deg;
            }
          }
          &.behind {
            --r: 108deg;
            --r-to: 10deg;
            --c: none;
            &:before {
              --c: var(--color);
              --r: 76deg;
              --r-to: 18deg;
            }
            &:after {
              content: '';
              top: 0;
              right: 0;
              height: 4px;
              width: 6px;
              clip-path: polygon(2px 0, 6px 0, 6px 4px, 0 4px);
              border-radius: 0 2px 2px 0;
              position: absolute;
              background: var(--color);
            }
          }
        }
      }
    }
  }

  .running-button {
    --padding-y: 12px;
    --padding-x: 36px;
    margin: 0;
    padding: var(--padding-y) 0;
    font-size: 16px;
    font-weight: 500;
    line-height: 23px;
    position: relative;
    border: none;
    overflow: hidden;
    outline: none;
    -webkit-appearance: none;
    background: var(--b, var(--background));
    span {
      display: block;
      transition: transform 0.4s ease;
      transform: translateX(var(--x, 0));
      padding: 0 var(--padding-x);
      &.default {
        --x: var(--default-x, 0);
      }
    }
    .running {
      --scale: 1;
      --color: powderblue;
      position: absolute;
      top: 30px;
      right: 110%;
      transition: transform 0.4s ease;
      transform: translateX(var(--running-x, -8px)) scale(var(--scale));
    }
    &:hover {
      --default-x: 0px;
      --running-x: 90px;
      /* --running-x: var(--padding-x); */
    }
  }

  @keyframes outer {
    50% {
      transform: translateY(0);
    }
    25%,
    75% {
      transform: translateY(4px);
    }
  }

  @keyframes body {
    50% {
      transform: rotate(16deg);
    }
    25%,
    75% {
      transform: rotate(24deg);
    }
  }

  @keyframes arm-leg {
    50% {
      transform: rotate(var(--r-to));
    }
  }

  @keyframes arm-b {
    30%,
    70% {
      transform: rotate(var(--r-to));
    }
  }

  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  * {
    box-sizing: inherit;
    &:before,
    &:after {
      box-sizing: inherit;
    }
  }
`;
